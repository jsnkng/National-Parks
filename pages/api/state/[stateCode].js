import fetch from 'isomorphic-unfetch';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// NPS API
const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
const apiURL = 'https://developer.nps.gov/api/v1'

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'NationalParkService_Cache';
const client = new MongoClient(url, { useNewUrlParser: true , useUnifiedTopology: true });




export default (req, res) => {
  const {
    query: { stateCode },
    method
  } = req


  // Use connect method to connect to the server
  client.connect(function(err) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    getStateFromCache(db, stateCode, function(cachedState) {
        if(cachedState === undefined || cachedState.length == 0)  {
            console.log('ERROR: Could not get state from MongoDB cache')
            
            
            fetchStateFromAPI(stateCode, function(fetchedState) {
                if(fetchedState === undefined || fetchedState.length == 0)  {
                    console.log('ERROR: Could not fetch state from NPS API')
                } else {
                    console.log('SUCCESS: Fetched state from NPS API')
                    
                    writeStateToCache(db, stateCode, fetchedState, function(newCachedState) {
                      if(newCachedState === undefined || newCachedState.length == 0)  {
                        console.log('ERROR: Could not write state to MongoDB cache')
                      } else {
                        console.log('SUCCESS: Wrote state to MongoDB cache')
                        res.status(200).json(newCachedState[0])
                      }
                    })

                }
            })


        } else {
          console.log('SUCCESS: Got state from MongoDB cache')
          res.status(200).json(cachedState[0])
        }


    })

  })
}

const getStateFromCache = function(db, stateCode, callback) {
  // Get the state from MongoDB cache
  const collection = db.collection('states')
  // Find the state matching state_id
  collection.find({'state_id': stateCode}).toArray(function(err, state) {
    assert.equal(err, null)
    console.log(state)
    callback(state)
  });
}

const fetchStateFromAPI = function(stateCode, callback) {
  // Fetch the state from the NPS API
  fetch(`${apiURL}/parks?stateCode=${stateCode}&fields=images&api_key=${apiKey}`)
    .then( r => r.json() )
    .then( state => {
      // console.log(state)
      callback(state)
    })
    .catch(err => {
      console.log(err.stack)
    })
}

const writeStateToCache = function(db, stateCode, state, callback) {
  // Write the state to the MongoDB cache
    state.state_id = stateCode

    // Get the states collection
    const collection = db.collection('states')
    // Insert state
    collection.insertOne(state, function(err, result) {
      assert.equal(err, null)
      assert.equal(1, result.result.n)
      assert.equal(1, result.ops.length)
      console.log('Inserted 1 state into the collection')
      callback([state])
    })
}


