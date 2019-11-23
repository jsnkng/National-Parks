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
    query: { parkCode },
    method
  } = req


  const readParks = async (parkCode) => {
    
    console.log(`\n|\n|     async function readParks(parkCode:${parkCode}) {\n|`)
    
    try {
      await client.connect()
      console.log("|     DB    Connected to MongoDB Server *****\n|")
      const db = client.db(dbName)
      const col = db.collection('parks')

      const data = await col.find({ _id: parkCode }).limit(1).toArray()
      
      console.log(`|     DB    Result ----------------------> data\n|\n`)
      console.log(data,`\n`)
      console.log('\n|\n|     DB    End Result ------------------> data\n|')

      client.close()

      if(data === undefined || data.length == 0)  {
        console.log("|     GOTO >>> fetchParks(parkCode)\n|\n|")
        fetchParks(parkCode)
      } else {
        console.log("|     GOTO >>> returnParks(data[0])\n|\n|")
        returnParks(data[0])
      }
    } 
    catch (err) {
      console.log(err.stack)
    }
  }

  
  const fetchParks = async (parkCode) => {
    console.log(`\n|\n|     async function fetchParks(parkCode:${parkCode}) {\n|`)
    try {

      const parksEndpoint = `${apiURL}/parks?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const parksResult = await fetch(parksEndpoint)
      const parks =  await parksResult.json()

      const peopleEndpoint = `${apiURL}/people?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const peopleResult = await fetch(peopleEndpoint)
      const people = await peopleResult.json()

      const placesEndpoint = `${apiURL}/places?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const placesResult = await fetch(placesEndpoint)
      const places = await placesResult.json()

      const visitorCentersEndpoint = `${apiURL}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const visitorCentersResult = await fetch(visitorCentersEndpoint)
      const visitorCenters = await visitorCentersResult.json()

      const eventsEndpoint = `${apiURL}/events?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const eventsResult = await fetch(eventsEndpoint)
      const events = await eventsResult.json()

      const articlesEndpoint = `${apiURL}/articles?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const articlesResult = await fetch(articlesEndpoint)
      const articles = await articlesResult.json()

      const alertsEndpoint = `${apiURL}/alerts?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const alertsResult = await fetch(alertsEndpoint)
      const alerts = await alertsResult.json()

      const campgroundsEndpoint = `${apiURL}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
      const campgroundsResult = await fetch(campgroundsEndpoint)
      const campgrounds = await campgroundsResult.json()


      const data = {
        "parks" : parks.data[0],
        "places" : places.data,
        "people" : people.data,
        "visitorCenters" : visitorCenters.data,
        "events" : events.data,
        "articles" : articles.data,
        "alerts" : alerts.data,
        "campgrounds" : campgrounds.data
      }

      console.log(`|     DB    Result ----------------------> data\n|\n`)
      console.log(data,`\n`)
      console.log('\n|\n|     DB    End Result ------------------> data\n|')

      cacheParks(parkCode, data)
      returnParks(data)
    } catch(err) {
      console.log(err.stack)
    }
    

  }
  

  const cacheParks = async (parkCode, data) => {

    console.log(`\n|\n|     async function cacheParks(parkCode:${parkCode}) {\n|`)
    data._id = parkCode
    console.log(`|     DB    Result ----------------------> data\n|\n`)
    console.log(data,`\n`)
    console.log('\n|\n|     DB    End Result ------------------> data\n|')

    try {
      await client.connect();
      console.log("Connected correctly to server")
      
      const db = client.db(dbName)
        
      let r = await db.collection('parks').insertOne(data);
      assert.equal(1, r.insertedCount);

      client.close();
      console.log("Wrote Object to Cache")
      
    } 
    catch(err) {
      console.log(err.stack)
    }
  }


  const returnParks = async (data) => {
    console.log(`\n|\n|     async function returnParks(parkCode:${parkCode}) {\n|`)
    console.log(`|     DB    Result ----------------------> data\n|\n`)
    console.log(data,`\n`)
    console.log('\n|\n|     DB    End Result ------------------> data\n|')
    res.status(200).json(data)
  }

  readParks(parkCode)
}
  