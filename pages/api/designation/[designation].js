import { MongoClient } from 'mongodb'

export default (req, res) => {
  const {
    query: { designation }
  } = req

  const getParksByType = async (db, callback) => {
    console.log(`Getting Parks By Type (${designation})`)
    const parks = await db.collection('parksCombined').aggregate([{ $match: { 'park.designation': designation } }, { $sample: { size: 60 } }]).toArray()
    const result = { parks }
    callback(result)
  }

  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getParksByType(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
