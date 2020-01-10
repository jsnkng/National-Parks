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
  const getAlerts = async (db, callback) => {
    let [alerts] = await db.collection('alerts').find({ parkCode }).toArray()
    if (alerts === undefined || alerts.length === 0) {
      console.log(`Fetching Alerts (${parkCode}) From API`)
      alerts = await fetchWithErrorHandling(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      alerts.parkCode = parkCode
      await db.collection('alerts').insertOne(alerts)
    }
    result.alerts = alerts.data
    result.alerts.parkCode = parkCode
    callback(result)
  }

  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n\nerr:${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getAlerts(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
