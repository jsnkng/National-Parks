// import { ObjectId, MongoClient } from "mongodb"
// import assert from 'assert'
import fetch from 'isomorphic-unfetch';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// NPS API
const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
const apiURL = 'https://developer.nps.gov/api/v1'

// MongoDB Cache
const url = 'mongodb+srv://zeit-xfxHdiHPdmS8wb93FxDKkadB:XenSPvrs7CgMUO6G@cluster0-pexqw.mongodb.net/test?retryWrites=true&w=majority'
const dbName = 'NationalParkService_Cache';
const client = new MongoClient(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  // sets the delay between every retry (milliseconds)
  reconnectInterval: 1000 
});





export default (req, res) => {
  const {
    query: { stateCode },
    method
  } = req


  const readParks = async (stateCode) => {
    
    console.log(`\n|\n|     async function readParks(stateCode:${stateCode}) {\n|`)
    
    try {
      await client.connect()
      console.log("|     DB    Connected to MongoDB Server *****\n|")
      const db = client.db(dbName)
      const col = db.collection('states')

      const data = await col.find({ _id: stateCode }).limit(1).toArray()
      
      console.log(`|     DB    Result ----------------------> data\n|\n`)
    //   console.log(data,`\n`)
      console.log('\n|\n|     DB    End Result ------------------> data\n|')

      client.close()

      if(data === undefined || data.length == 0)  {
        console.log("|     GOTO >>> fetchParks(stateCode)\n|\n|")
        fetchParks(stateCode)
      } else {
        console.log("|     GOTO >>> returnParks(data[0])\n|\n|")
        returnParks(data[0])
      }
    } 
    catch (err) {
      console.log(err.stack)
    }
  }

  
  const fetchParks = async (stateCode) => {
    console.log(`\n|\n|     async function fetchParks(stateCode:${stateCode}) {\n|`)
    try {

      const parksEndpoint = `${apiURL}/parks?stateCode=${stateCode}&fields=images&api_key=${apiKey}`
      const parksResult = await fetch(parksEndpoint)
      const data =  await parksResult.json()


      console.log(`|     DB    Result ----------------------> data\n|\n`)
    //   console.log(data,`\n`)
      console.log('\n|\n|     DB    End Result ------------------> data\n|')

      cacheParks(stateCode, data)
    } catch(err) {
      console.log(err.stack)
    }
    

  }
  

  const cacheParks = async (stateCode, data) => {

    console.log(`\n|\n|     async function cacheParks(stateCode:${stateCode}) {\n|`)
    data._id = stateCode
    console.log(`|     DB    Result ----------------------> data\n|\n`)
    // console.log(data,`\n`)
    console.log('\n|\n|     DB    End Result ------------------> data\n|')

    try {
      await client.connect();
      console.log("Connected correctly to server")
      
      const db = client.db(dbName)
        
      let r = await db.collection('states').insertOne(data);
      assert.equal(1, r.insertedCount);

      client.close();
      console.log("Wrote Object to Cache")
      
      returnParks(data)
    } 
    catch(err) {
      console.log(err.stack)
    }
  }


  const returnParks = async (data) => {
    console.log(`\n|\n|     async function returnParks(stateCode:${stateCode}) {\n|`)
    console.log(`|     DB    Result ----------------------> data\n|\n`)
    // console.log(data,`\n`)
    console.log('\n|\n|     DB    End Result ------------------> data\n|')
    res.status(200).json(data)
  }

  readParks(stateCode)
}
  