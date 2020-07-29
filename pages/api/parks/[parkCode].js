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
import s3Images from '../_utils/s3ImageUpload'

const fetchWithErrorHandling = async url => {
  // API Started throwing 403 errors because User-Agent was empty
  // create an empty `Headers` object
  const headers = new Headers()

  // add headers
  headers.append('User-Agent', 'NatParGuide')
  const request = new Request(url, {
    headers
  })
  try {
    return await (await fetch(request)).json()
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
    const result = {}
    // Check MongoDB for existing park
    let [park] = await db.collection('parks').find({ parkCode }).toArray()
    // If no park found in MongoDB then fetch from NPS apis
    if (park === undefined || park.length === 0) {
      park = {}
      console.log(`Fetching Park (${parkCode}) From API`)
      const parkResult = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images,addresses,entranceFees,operatinngHours,contacts,entrancePasses&api_key=${process.env.NPS_KEY}`)
      park = parkResult.data[0]
      park.parkCode = parkCode

      // Insert one JSON object
      await db.collection('parks').insertOne(park)
      // Run park images through S3
      console.log(`Processing Park (${parkCode}) Images`)
      await s3Images(park.images)
    }
    result.park = park

    console.log(`Getting ppvac (${parkCode})`)
    let [ppvac] = await db.collection('ppvac').find({ parkCode }).toArray()
    // If no park found in MongoDB then fetch from NPS apis
    if (ppvac === undefined || ppvac.length === 0) {
      ppvac = {}
      console.log(`Fetching ppvac (${parkCode}) From API`)

      // Fetch additional data from apis
      const people = await fetchWithErrorHandling(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      ppvac.people = people.data
      const places = await fetchWithErrorHandling(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      ppvac.places = places.data
      const visitorcenters = await fetchWithErrorHandling(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=addresses,operatingHours,contacts&api_key=${process.env.NPS_KEY}`)
      ppvac.visitorcenters = visitorcenters.data
      const articles = await fetchWithErrorHandling(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=listingImage,relatedParks&api_key=${process.env.NPS_KEY}`)
      ppvac.articles = articles.data
      const campgrounds = await fetchWithErrorHandling(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=accessibility,addresses,amenities,campsites,contacts,fees,images,operatingHours&api_key=${process.env.NPS_KEY}`)
      ppvac.campgrounds = campgrounds.data

      ppvac.parkCode = parkCode

      console.log(`Inserting ppvac (${parkCode}) into MongoDB`)
      // Insert one JSON object
      await db.collection('ppvac').insertOne(ppvac)
    }

    result.people = ppvac.people
    result.places = ppvac.places
    result.visitorcenters = ppvac.visitorcenters
    result.articles = ppvac.articles
    result.campgrounds = ppvac.campgrounds


    // Since alerts, newsreleases, and events should be updated more frequently these
    // are stored in separate collections and fetched from db or api individually before
    // being passed to the result object
    console.log(`Getting alerts (${parkCode})`)
    let [alerts] = await db.collection('alerts').find({ parkCode }).toArray()
    if (alerts === undefined || alerts.length === 0) {
      console.log(`Fetching Alerts (${parkCode}) From API`)
      alerts = await fetchWithErrorHandling(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      alerts.parkCode = parkCode
      await db.collection('alerts').insertOne(alerts)
    }
    result.alerts = alerts.data

    console.log(`Getting newsreleases (${parkCode})`)
    let [newsreleases] = await db.collection('newsreleases').find({ parkCode }).toArray()
    if (newsreleases === undefined || newsreleases.length === 0) {
      console.log(`Fetching News Releases (${parkCode}) From API`)
      newsreleases = await fetchWithErrorHandling(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      newsreleases.parkCode = parkCode
      await db.collection('newsreleases').insertOne(newsreleases)
    }
    result.newsreleases = newsreleases.data

    console.log(`Getting events (${parkCode})`)
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
