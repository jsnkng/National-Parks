import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const database = async (req, res, next) => {
  if (!client.isConnected()) {
    console.log('db not connected')
    await client.connect()
  }

  req.dbClient = client
  req.db = client.db(process.env.DB_NAME)
  return next()
}

export default database