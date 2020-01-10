import { MongoClient } from 'mongodb'
import fetch from 'isomorphic-unfetch'
import s3Images from '../_utils/_s3Images'

const fetchWithErrorHandling = async url => {
  try {
    return await (await fetch(url)).json()
  } catch (err) {
    return { error: true }
  }
}

export default (req, res) => {
  const {
    query: { parkCode }
  } = req

  const getPark = async (db, callback) => {
    console.log(`Getting Park (${parkCode})`)

    let [result] = await db.collection('parksCombined').find({ parkCode }).toArray()
    if (result === undefined || result.length === 0) {
      result = {}
      console.log(`Fetching Park (${parkCode}) From API`)
      const park = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.park = park.data[0]
      result.parkCode = parkCode

      const people = await fetchWithErrorHandling(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.people = people.data
      const places = await fetchWithErrorHandling(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.places = places.data
      const visitorcenters = await fetchWithErrorHandling(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.visitorcenters = visitorcenters.data
      const articles = await fetchWithErrorHandling(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.articles = articles.data
      const campgrounds = await fetchWithErrorHandling(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.campgrounds = campgrounds.data
      // Insert one JSON object
      await db.collection('parksCombined').insertOne(result)
      // Run park images
      console.log(`Processing Park (${parkCode}) Images`)
      await s3Images(result.park.images)
    }

    let [alerts] = await db.collection('alerts').find({ parkCode }).toArray()
    if (alerts === undefined || alerts.length === 0) {
      console.log(`Fetching Alerts (${parkCode}) From API`)
      alerts = await fetchWithErrorHandling(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      alerts.parkCode = parkCode
      await db.collection('alerts').insertOne(alerts)
    }
    result.alerts = alerts.data

    let [newsreleases] = await db.collection('newsreleases').find({ parkCode }).toArray()
    if (newsreleases === undefined || newsreleases.length === 0) {
      console.log(`Fetching News Releases (${parkCode}) From API`)
      newsreleases = await fetchWithErrorHandling(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      newsreleases.parkCode = parkCode
      await db.collection('newsreleases').insertOne(newsreleases)
    }
    result.newsreleases = newsreleases.data

    let [events] = await db.collection('events').find({ parkCode }).toArray()
    if (events === undefined || events.length === 0) {
      console.log(`Fetching Events (${parkCode}) From API`)
      events = await fetchWithErrorHandling(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      events.parkCode = parkCode
      await db.collection('events').insertOne(events)
    }
    result.events = events.data

    callback(result)
  }

  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n\nerr:${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getPark(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
