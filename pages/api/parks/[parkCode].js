import fetch from 'isomorphic-unfetch';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// NPS API
const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
const apiURL = 'https://developer.nps.gov/api/v1'

// Connection URL
const url = 'mongodb://localhost:27017';
// const url = 'mongodb+srv://zeit-xfxHdiHPdmS8wb93FxDKkadB:XenSPvrs7CgMUO6G@cluster0-pexqw.mongodb.net'

// Database Name
const dbName = 'NationalParkService_Cache';
const client = new MongoClient(url, { useNewUrlParser: true , useUnifiedTopology: true });




export default (req, res) => {
  const {
    query: { parkCode },
    method
  } = req


  // Use connect method to connect to the server
  client.connect(function(err) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    getParksFromCache(db, parkCode, function(cachedParks) {
        if(cachedParks === undefined || cachedParks.length == 0)  {
            console.log('ERROR: Could not get parks from MongoDB cache')
            
            
            fetchParksFromAPI(parkCode, function(fetchedParks) {
                if(fetchedParks === undefined || fetchedParks.length == 0)  {
                    console.log('ERROR: Could not fetch parks from NPS API')
                } else {
                    console.log('SUCCESS: Fetched parks from NPS API')
                    
                    writeParksToCache(db, parkCode, fetchedParks, function(newCachedParks) {
                      if(newCachedParks === undefined || newCachedParks.length == 0)  {
                        console.log('ERROR: Could not write parks to MongoDB cache')
                      } else {
                        console.log('SUCCESS: Wrote parks to MongoDB cache')
                        res.status(200).json(newCachedParks[0])
                      }
                    })

                }
            })


        } else {
          console.log('SUCCESS: Got parks from MongoDB cache')
          res.status(200).json(cachedParks[0])
        }


    })

  })
}


const getParksFromCache = function(db, parkCode, callback) {
  // Get the parks from MongoDB cache
  const collection = db.collection('parks')
  // Find the parks matching parks_id
  collection.find({'parks_id': parkCode}).toArray(function(err, parks) {
    assert.equal(err, null)
    // console.log(parks)
    callback(parks)
  });
}

const fetchParksFromAPI = function(parkCode, callback) {

  const data = {}
  // Fetch the parks from the NPS API
  fetch(`${apiURL}/parks?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
  .then( r => r.json() )
  .then( parks => {
    data.parks = parks
    fetch(`${apiURL}/people?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
    .then( r => r.json() )
    .then( people => {
      data.people = people
      fetch(`${apiURL}/places?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
      .then( r => r.json() )
      .then( places => {
        data.places = places
        fetch(`${apiURL}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
        .then( r => r.json() )
        .then( visitorcenters => {
          data.visitorcenters = visitorcenters
          fetch(`${apiURL}/events?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
          .then( r => r.json() )
          .then( events => {
            data.events = events
            fetch(`${apiURL}/articles?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
            .then( r => r.json() )
            .then( articles => {
              data.articles = articles
              fetch(`${apiURL}/alerts?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
              .then( r => r.json() )
              .then( alerts => {
                data.alerts = alerts
                fetch(`${apiURL}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${apiKey}`)
                .then( r => r.json() )
                .then( campgrounds => {
                  data.campgrounds = campgrounds
                  console.log(data)
                  callback(data)
                })
              })
            })
          })
        })
      })
    })
  })
}

const writeParksToCache = function(db, parkCode, parks, callback) {
  // Write the parks to the MongoDB cache
    parks.parks_id = parkCode

    // Get the parkss collection
    const collection = db.collection('parks')
    // Insert parks
    collection.insertOne(parks, function(err, result) {
      assert.equal(err, null)
      assert.equal(1, result.result.n)
      assert.equal(1, result.ops.length)
      console.log('Inserted 1 parks into the collection')
      callback([parks])
    })
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
      // console.log(data,`\n`)
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
    // console.log(data,`\n`)
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
    // console.log(data,`\n`)
    console.log('\n|\n|     DB    End Result ------------------> data\n|')
    res.status(200).json(data)
  }

 