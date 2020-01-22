/*
API endpoint returns a random park
Arguments:
  none
  example:
  http://localhost:3000/parks/random
Returns:
  Nested JSON object containing park, people, places, visitorcenters, articles, and campgrounds for the specified parkCode.
  Upon init checks MongoDB for existing park record, if not found fetches all data from NPS apis and then inserts into MongoDB
*/

import { MongoClient } from 'mongodb'

export default (req, res) => {

  const getRandomPark = async (db, callback) => {
    console.log(`Getting Random Parks`)

    // const parkCodes = ['chis', 'arch', 'yose', 'seki', 'pinn', 'whsa', 'elmo', 'glac', 'biho', 'ciro', 'crmo', ]
    // const parkCode = parkCodes[Math.floor(Math.random() * parkCodes.length)]
    // const parks = await db.collection('parks').find({ parkCode }).toArray()
    const parks = await db.collection('parks').aggregate([{ $sample: { size: 1 } }]).toArray()
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

    getRandomPark(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
