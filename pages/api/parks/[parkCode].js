import { MongoClient } from 'mongodb'
import fetch from 'isomorphic-unfetch'
import s3Images from '../_utils/_s3Images'

const fetchWithErrorHandling = async url => {
  try {
    return await (await fetch(url))
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

    let [result] = await db.collection('parks').find({ parks_id: parkCode }).toArray()
    if (result === undefined || result.length === 0) {
      console.log(`Fetching Park (${parkCode}) from API`)
      result = await fetch(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.people = await fetch(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.places = await fetch(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.visitorcenters = await fetch(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.articles = await fetch(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.campgrounds = await fetch(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      if (result !== undefined || result.length !== 0) {
        result.parks_id = parkCode
        console.log(`Inserting Park (${parkCode}) into MongoDB`)
        await db.collection('parks').insertOne(result)
        // Separate function to handle checking if image exists on s3 and uploading if not
        await s3Images(result.data[0].images)
      }
    } else {
      console.log(`Fetched Park (${parkCode}) from MongoDB`)
    }


    const [alerts] = await db.collection('alerts').find({ parks_id: parkCode }).toArray()
    if (alerts === undefined || alerts.length === 0) {
      result.alerts = await fetch(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      console.log(`Fetching Alerts (${parkCode})`)
      result.alerts.parks_id = parkCode
      await db.collection('alerts').insertOne(result.alerts)
    } else {
      result.alerts = alerts
    }
    const [events] = await db.collection('events').find({ parks_id: parkCode }).toArray()
    if (events === undefined || events.length === 0) {
      result.events = await fetch(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      console.log(`Fetching Events (${parkCode})`)
      result.events.parks_id = parkCode
      await db.collection('events').insertOne(result.events)
    } else {
      result.events = events
    }
    const [newsreleases] = await db.collection('newsreleases').find({ parks_id: parkCode }).toArray()
    if (newsreleases === undefined || newsreleases.length === 0) {
      result.newsreleases = await fetch(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      console.log(`Fetching NewsReleases (${parkCode})`)
      result.newsreleases.parks_id = parkCode
      await db.collection('newsreleases').insertOne(result.newsreleases)
    } else {
      result.newsreleases = newsreleases
    }
    const [articles] = await db.collection('articles').find({ parks_id: parkCode }).toArray()
    if (articles === undefined || articles.length === 0) {
      result.articles = await fetch(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      console.log(`Fetching Articles (${parkCode})`)
      result.articles.parks_id = parkCode
      await db.collection('articles').insertOne(result.articles)
    } else {
      result.articles = articles
    }

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
