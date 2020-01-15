/*
API endpoint returns parks by their designation i.e. National Monument
Arguments:
  designation (required) This is a url encoded designation that is passed like this
  example:
  http://localhost:3000/designations/[designation]
Returns:
  JSON array of Park objects
*/

import { MongoClient } from 'mongodb'

export default (req, res) => {
  const {
    query: { designation }
  } = req

  // This api is independent of NPS, i.e. it will only return results in MongoDB and doesn't fetch 
  // more results from any NPS api
  const getParksByType = async (db, callback) => {
    console.log(`Getting Parks By Type (${designation})`)
    const parks = await db.collection('parks').aggregate([{ $match: { designation } }, { $sample: { size: 60 } }]).toArray()
    const result = parks
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
