/*
API endpoint returns parks by their stateCode i.e. nj
Arguments:
  stateCode (required) This is the stateCode assigned by NPS
  example:
  http://localhost:3000/state/[stateCode]
Returns:
  Array of JSON objects containing parks for the specified stateCode.
  Upon init checks MongoDB for existing state record, if not found fetches all data from NPS apis and then inserts into MongoDB.

  This functionality is designed to work with MongoDB/noSQL since it is trivial to store a complex array of objects in it rather
  than creating a nomarlized data structure like with SQL. 
*/

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
    // Check MongoDB for existing state
    let [result] = await db.collection('states').find({ stateCode }).toArray()
    if (result === undefined || result.length === 0) {
      console.log(`Fetching State (${stateCode}) from API`)
      // If no state found in MongoDB then fetch from NPS apis
      result = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?stateCode=${stateCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      if (result !== undefined || result.length !== 0) {
        result.stateCode = stateCode
        console.log(`Inserting State (${stateCode}) into MongoDB`)
        // Insert one JSON object
        await db.collection('states').insertOne(result)
      }
    } else {
      console.log(`Fetched State (${stateCode}) from MongoDB`)
    }
    callback(result)
  }

  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
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
