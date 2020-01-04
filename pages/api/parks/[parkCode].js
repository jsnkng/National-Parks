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

    const result = { parkCode }

    let [park] = await db.collection('parks').find({ parkCode }).toArray()
    if (park === undefined || park.length === 0) {
      console.log(`Fetching Park (${parkCode}) From API`)
      park = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      park.parkCode = parkCode
      await db.collection('parks').insertOne(park.data[0])
      // Run park images
      console.log(`Processing Park (${parkCode}) Images`)
      await s3Images(park.data[0].images)
      result.park = park.data[0]
    } else {
      result.park = park
    }
    result.park.parkCode = parkCode


    let [alerts] = await db.collection('alerts').find({ parkCode }).toArray()
    if (alerts === undefined || alerts.length === 0) {
      console.log(`Fetching Alerts (${parkCode}) From API`)
      alerts = await fetchWithErrorHandling(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      alerts.parkCode = parkCode
      await db.collection('alerts').insertOne(alerts)
    }
    result.alerts = alerts.data
    result.alerts.parkCode = parkCode

    let [newsreleases] = await db.collection('newsreleases').find({ parkCode }).toArray()
    if (newsreleases === undefined || newsreleases.length === 0) {
      console.log(`Fetching News Releases (${parkCode}) From API`)
      newsreleases = await fetchWithErrorHandling(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      newsreleases.parkCode = parkCode
      await db.collection('newsreleases').insertOne(newsreleases)
    }
    result.newsreleases = newsreleases.data
    result.newsreleases.parkCode = parkCode

    let [events] = await db.collection('events').find({ parkCode }).toArray()
    if (events === undefined || events.length === 0) {
      console.log(`Fetching Events (${parkCode}) From API`)
      events = await fetchWithErrorHandling(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      events.parkCode = parkCode
      await db.collection('events').insertOne(events)
    }
    result.events = events.data
    result.events.parkCode = parkCode


    let [articles] = await db.collection('articles').find({ parkCode }).toArray()
    if (articles === undefined || articles.length === 0) {
      console.log(`Fetching Articles (${parkCode}) From API`)
      articles = await fetchWithErrorHandling(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      articles.parkCode = parkCode
      await db.collection('articles').insertOne(articles)
    }
    result.articles = articles.data
    result.articles.parkCode = parkCode


    let [people] = await db.collection('people').find({ parkCode }).toArray()
    if (people === undefined || people.length === 0) {
      console.log(`Fetching People (${parkCode}) From API`)
      people = await fetchWithErrorHandling(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      people.parkCode = parkCode
      await db.collection('people').insertOne(people)
    }
    result.people = people.data
    result.people.parkCode = parkCode

    let [places] = await db.collection('places').find({ parkCode }).toArray()
    if (places === undefined || places.length === 0) {
      console.log(`Fetching Places (${parkCode}) From API`)
      places = await fetchWithErrorHandling(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      places.parkCode = parkCode
      await db.collection('places').insertOne(places)
    }
    result.places = places.data
    result.places.parkCode = parkCode

    let [visitorcenters] = await db.collection('visitorcenters').find({ parkCode }).toArray()
    if (visitorcenters === undefined || visitorcenters.length === 0) {
      console.log(`Fetching Visitor Centers (${parkCode}) From API`)
      visitorcenters = await fetchWithErrorHandling(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      visitorcenters.parkCode = parkCode
      await db.collection('visitorcenters').insertOne(visitorcenters)
    }
    result.visitorcenters = visitorcenters.data
    result.visitorcenters.parkCode = parkCode


    let [campgrounds] = await db.collection('campgrounds').find({ parkCode }).toArray()
    if (campgrounds === undefined || campgrounds.length === 0) {
      console.log(`Fetching Campgrounds (${parkCode}) From API`)
      campgrounds = await fetchWithErrorHandling(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      campgrounds.parkCode = parkCode
      await db.collection('campgrounds').insertOne(campgrounds)
    }
    result.campgrounds = campgrounds.data
    result.campgrounds.parkCode = parkCode

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
