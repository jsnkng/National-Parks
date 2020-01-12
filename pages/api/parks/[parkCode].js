/*
API endpoint returns parks by their parkCode i.e. dewa
Arguments:
  parkCode (required) This is the parkCode assigned by NPS
  example:
  http://localhost:3000/parks/[parkCode]
Returns:
  Nested JSON object containing park, people, places, visitorcenters, articles, and campgrounds for the specified parkCode.
  Upon init checks MongoDB for existing park record, if not found fetches all data from NPS apis and then inserts into MongoDB
*/

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
    // Check MongoDB for existing park
    let [result] = await db.collection('parksCombined').find({ parkCode }).toArray()
    // If no park found in MongoDB then fetch from NPS apis
    if (result === undefined || result.length === 0) {
      result = {}
      console.log(`Fetching Park (${parkCode}) From API`)
      const park = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images,addresses,entranceFees,operatinngHours,contacts,entrancePasses&api_key=${process.env.NPS_KEY}`)
      result.park = park.data[0]
      result.parkCode = parkCode

      // Fetch additional data from apis
      const people = await fetchWithErrorHandling(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.people = people.data
      const places = await fetchWithErrorHandling(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      result.places = places.data
      const visitorcenters = await fetchWithErrorHandling(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=addresses,operatingHours,contacts&api_key=${process.env.NPS_KEY}`)
      result.visitorcenters = visitorcenters.data
      const articles = await fetchWithErrorHandling(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=listingImage,relatedParks&api_key=${process.env.NPS_KEY}`)
      result.articles = articles.data
      const campgrounds = await fetchWithErrorHandling(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=accessibility,addresses,amenities,campsites,contacts,fees,images,operatingHours&api_key=${process.env.NPS_KEY}`)
      result.campgrounds = campgrounds.data

      // Insert one JSON object
      await db.collection('parksCombined').insertOne(result)
      // Run park images through S3
      console.log(`Processing Park (${parkCode}) Images`)
      await s3Images(result.park.images)
    }

    // Since alerts, newsreleases, and events should be updated more frequently these
    // are stored in separate collections and fetched from db or api individually before
    // being passed to the result object
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
      events = await fetchWithErrorHandling(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images,dates,tags,times,types&api_key=${process.env.NPS_KEY}`)
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
