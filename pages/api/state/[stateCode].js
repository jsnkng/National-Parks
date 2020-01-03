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
    query: { stateCode }
  } = req

  const getState = async (db, callback) => {
    console.log(`Getting State (${stateCode})`)

    let [result] = await db.collection('states').find({ state_id: stateCode }).toArray()
    if (result === undefined || result.length === 0) {
      console.log(`Getting State (${stateCode}) Failed`)
      console.log(`Fetching State (${stateCode}) from API`)
      result = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?stateCode=${stateCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      if (result !== undefined || result.length !== 0) {
        result.state_id = stateCode
        console.log(`Inserting State (${stateCode}) into MongoDB`)
        await db.collection('states').insertOne(result)
      }
    } else {
      console.log(`Fetched State (${stateCode}) from MongoDB`)
    }

    callback(result)
  }

  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getState(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
