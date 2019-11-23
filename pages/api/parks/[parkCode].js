// import React from 'react'
import { useRouter } from 'next/router'
// import fetch from 'isomorphic-unfetch'

const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
const apiURL = 'https://developer.nps.gov/api/v1'


export default  (req, res) => {
  const {
    query: { parkCode },
    method
  } = req

  const readParks = async () => {
    const parksEndpoint = `${apiURL}/parks?parkCode=${parkCode}&fields=images&api_key=${apiKey}`
    const parksResult = await fetch(parksEndpoint)
    const parks =  await parksResult.json()
    return parks
  }

      const parks = readParks()
      .then(parks => {
        res.status(200).json({ parks })
      })
      // res.setHeader('Allow', ['GET'])
      // res.status(405).end(`Method ${method} Not Allowed`)



}
// const collection = {}
// const MongoClient = require('mongodb').MongoClient
// const assert = require('assert')
// const url = 'mongodb+srv://zeit-xfxHdiHPdmS8wb93FxDKkadB:XenSPvrs7CgMUO6G@cluster0-pexqw.mongodb.net/test?retryWrites=true&w=majority'
// const dbName = 'myproject';

// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   insertDocuments(db, function() {
//     updateDocument(db, function() {
//       client.close();
//     });
//   });
// });

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }


// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Find some documents
//   collection.find({'a': 3}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs);
//     callback(docs);
//   });
// }

// const updateDocument = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Update document where a is 2, set b equal to 1
//   collection.updateOne({ a : 2 }
//     , { $set: { b : 1 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });
// }

// const getPark = async ({parkCode}) => {


//   const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
//   const apiURL = 'https://developer.nps.gov/api/v1'

//   const parksEndpoint = `${apiURL}/parks?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   const parksResult = await fetch(parksEndpoint)
//   const parks = await parksResult.json()
  
//   // const peopleEndpoint = `${apiURL}/people?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const peopleResult = await fetch(peopleEndpoint)
//   // const people = await peopleResult.json()

//   // const placesEndpoint = `${apiURL}/places?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const placesResult = await fetch(placesEndpoint)
//   // const places = await placesResult.json()

//   // const visitorCentersEndpoint = `${apiURL}/visitorcenters?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const visitorCentersResult = await fetch(visitorCentersEndpoint)
//   // const visitorCenters = await visitorCentersResult.json()

//   // const eventsEndpoint = `${apiURL}/events?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const eventsResult = await fetch(eventsEndpoint)
//   // const events = await eventsResult.json()

//   // const articlesEndpoint = `${apiURL}/articles?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const articlesResult = await fetch(articlesEndpoint)
//   // const articles = await articlesResult.json()

//   // const alertsEndpoint = `${apiURL}/alerts?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const alertsResult = await fetch(alertsEndpoint)
//   // const alerts = await alertsResult.json()

//   // const campgroundsEndpoint = `${apiURL}/campgrounds?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
//   // const campgroundsResult = await fetch(campgroundsEndpoint)
//   // const campgrounds = await campgroundsResult.json()


//   const result = {
//     "parks" : parks.data[0],
//     // "places" : places.data,
//     // "people" : people.data,
//     // "visitorCenters" : visitorCenters.data,
//     // "events" : events.data,
//     // "articles" : articles.data,
//     // "alerts" : alerts.data,
//     // "campgrounds" : campgrounds.data
//   }




// }



// export default (req, res) => {
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   const result = getPark({query})
//   res.end(JSON.stringify(result))
// }
