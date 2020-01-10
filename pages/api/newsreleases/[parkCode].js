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
    query: { parkCode }
  } = req

  const result = { parkCode }
  const getNewsReleases = async (db, callback) => {
    let [newsreleases] = await db.collection('newsreleases').find({ parkCode }).toArray()
    if (newsreleases === undefined || newsreleases.length === 0) {
      console.log(`Fetching NewsReleases (${parkCode}) From API`)
      newsreleases = await fetchWithErrorHandling(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      newsreleases.parkCode = parkCode
      await db.collection('newsreleases').insertOne(alerts)
    }
    result.newsreleases = newsreleases.data
    result.newsreleases.parkCode = parkCode
    callback(result)
  }


  MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    console.log(`\n\nerr:${err}`)
    console.log('Connected to MongoDB')

    const db = client.db(process.env.DB_NAME)

    getNewsReleases(db, result => {
      client.close()
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(result))
    })
  })
}
