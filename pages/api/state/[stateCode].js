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

    let [state] = await db.collection('states').find({ stateCode }).toArray()
    if (state === undefined || state.length === 0) {
      console.log(`Fetching State (${stateCode}) from API`)
      state = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?stateCode=${stateCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      if (state !== undefined || state.length !== 0) {
        state.stateCode = stateCode
        console.log(`Inserting State (${stateCode}) into MongoDB`)
        await db.collection('states').insertOne(state)
      }
    } else {
      console.log(`Fetched State (${stateCode}) from MongoDB`)
    }

    callback(state)
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

