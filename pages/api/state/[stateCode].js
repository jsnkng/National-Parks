import { MongoClient } from 'mongodb'
import fetch from 'isomorphic-unfetch'

// import nextConnect from 'next-connect'
// import database from '../../../middlewares/database'

// const handler = nextConnect()

const fetchWithErrorHandling = async url => {
  try {
    return await (await fetch(url))
  } catch (err) {
    return { error: true }
  }
}

// handler.use(database)

// handler.get(async (req, res) => {
//   const {
//     query: { stateCode }
//   } = req
  
//   let [state] = await req.db.collection('states').find({ state_id: stateCode }).toArray()

//   if (state === undefined || state.length === 0) {
//     state = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?stateCode=${stateCode}&fields=images&api_key=${process.env.NPS_KEY}`)

//     state.state_id = stateCode
//     await req.db.collection('states').insertOne(state)
//   }

//   res.json(state)
// })

// export default handler




export default (req, res) => {
  const {
    query: { stateCode }
  } = req


  const getState = async (db, callback) => {
    console.log(stateCode)

    let [result] = await db.collection('states').find({ state_id: stateCode }).toArray()
    
    if (result === undefined || result.length === 0) {
      console.log('Fetching from API')
      result = await fetch(`${process.env.NPS_URI}/parks?stateCode=${stateCode}&fields=images&api_key=${process.env.NPS_KEY}`).json()
      if (result !== undefined || result.length !== 0) {
        result.state_id = stateCode
        console.log('Inserting into MongoDB')
        await db.collection('states').insertOne(result)
      }
    } else {
      console.log('Fetched from MongoDB')
    }
    callback(result)
    console.log('calledback')
  }


  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log('\n\nerr: ' + err)
    console.log('Connected successfully to server')

    const db = client.db(process.env.DB_NAME)

    getState(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
      return true
    })
  })
}
