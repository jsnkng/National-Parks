import { MongoClient } from 'mongodb'
import fetch from 'isomorphic-unfetch'

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

  const result = { parkCode }
  const getEvents = async (db, callback) => {
    let [events] = await db.collection('events').find({ parkCode }).toArray()
    if (events === undefined || events.length === 0) {
      console.log(`Fetching Events (${parkCode}) From API`)
      events = await fetchWithErrorHandling(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      events.parkCode = parkCode
      await db.collection('events').insertOne(events)
    }
    result.events = events.data
    result.events.parkCode = parkCode
    callback(result)
  }


  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n\nerr:${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getEvents(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
