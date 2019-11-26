import fetch from 'isomorphic-unfetch';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const NPS_KEY="O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj"
const NPS_API="https://developer.nps.gov/api/v1"
const DB_URL="mongodb+srv://national_parks:1Y5QMu6632vZ3QtF@cluster0-pexqw.mongodb.net/NationalParkService_Cache?retryWrites=true&w=majority"


// NPS API
// const NPS_API = process.env.NPS_API
// const NPS_KEY = process.env.NPS_KEY

// Connection URL
// const DB_URL = process.env.DB_URL


// Database Name
const dbName = 'NationalParkService_Cache';
const client = new MongoClient(DB_URL, { useNewUrlParser: true , useUnifiedTopology: true });




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
  fetch(`${NPS_API}/parks?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
  .then( r => r.json() )
  .then( parks => {
    data.parks = parks
    fetch(`${NPS_API}/people?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
    .then( r => r.json() )
    .then( people => {
      data.people = people
      fetch(`${NPS_API}/places?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
      .then( r => r.json() )
      .then( places => {
        data.places = places
        fetch(`${NPS_API}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
        .then( r => r.json() )
        .then( visitorcenters => {
          data.visitorcenters = visitorcenters
          fetch(`${NPS_API}/events?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
          .then( r => r.json() )
          .then( events => {
            data.events = events
            fetch(`${NPS_API}/articles?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
            .then( r => r.json() )
            .then( articles => {
              data.articles = articles
              fetch(`${NPS_API}/alerts?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
              .then( r => r.json() )
              .then( alerts => {
                data.alerts = alerts
                fetch(`${NPS_API}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
                .then( r => r.json() )
                .then( campgrounds => {
                  data.campgrounds = campgrounds
                  fetch(`${NPS_API}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${NPS_KEY}`)
                  .then( r => r.json() )
                  .then( newsreleases => {
                    data.newsreleases = newsreleases
  
  
                    
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
