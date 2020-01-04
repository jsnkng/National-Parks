import { MongoClient } from 'mongodb'

export default (req, res) => {

  const getAggregatePark = async (db, callback) => {
    console.log(`Getting Aggregated Parks`)
    const parks = await db.collection('parks').aggregate([{ $sample: { size: 6 } }]).toArray()
    const result = { parks }
    callback(result)
  }

  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n\nerr:${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getAggregatePark(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
