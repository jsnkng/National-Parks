import { SitemapStream, streamToPromise } from 'sitemap'
import { MongoClient } from 'mongodb'
const { createGzip } = require('zlib')


export default (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    })
    const pipeline = smStream.pipe(createGzip())

    const getStates = async (db, callback) => {
      let result = await db.collection('states').find({}).toArray()
      callback(result)
    }

    MongoClient.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }, (err, client) => {
      console.log(`\n${err}`)
      console.log('Connected to MongoDB')

      const db = client.db(process.env.DB_NAME)

      getStates(db, result => {
        client.close()
        // Create each URL row
        // console.log(result)
        smStream.write({
          url: `/`,
          changefreq: 'daily',
          priority: 0.9
        })
        result.forEach(state => {
          smStream.write({
            url: `/state/${state.stateCode}`,
            changefreq: 'daily',
            priority: 0.9
          })
          state.data.forEach(park => {
            smStream.write({
              url: `/state/${state.stateCode}/park/${park.parkCode}`,
              changefreq: 'daily',
              priority: 0.9
            })
          })
        })

        // End sitemap stream
        smStream.end()
        // XML sitemap string
        const sitemapOutput = streamToPromise(smStream).toString()


        res.statusCode = 200
        res.setHeader('Content-Type', 'application/xml')
        res.setHeader('Content-Encoding', 'gzip')
        // res.end(sitemapOutput)
        pipeline.pipe(res).on('error', (e) => {throw e})
      })
    })
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}
