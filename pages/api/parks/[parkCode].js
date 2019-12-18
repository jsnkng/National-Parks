import fetch from 'isomorphic-unfetch'
import nextConnect from 'next-connect'
import database from '../../../middlewares/database'
import s3 from '../../../config/s3.config'
import request from 'request'
import sharp from 'sharp'

const handler = nextConnect()

handler.use(database)

handler.get(async (req, res) => {
  const {
    query: { parkCode }
  } = req
  let [parks] = await req.db.collection('parks').find({ parks_id: parkCode }).toArray()

  if (parks === undefined || parks.length === 0) {
    parks = await fetch(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.people = await fetch(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.places = await fetch(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.visitorcenters = await fetch(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.events = await fetch(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.articles = await fetch(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.alerts = await fetch(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.campgrounds = await fetch(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.newsreleases = await fetch(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })

    parks.parks_id = parkCode

    await req.db.collection('parks').insertOne(parks)

    const { s3Client } = s3
    const params = s3.uploadParams
    await parks.data[0].images.forEach(image => {
      const { url } = image
      request({ url, encoding: null }, (err, resp, buffer) => {

        params.Key = url.replace(/[/:-]/g, '_')
        params.Body = sharp(buffer).resize({ width: 1440 })
        params.ACL = 'public-read'
        s3Client.upload(params, (e, d) => {
          if (e) {
            console.log({ error: 'Error -> ' + e })
          }
          console.log({message: 'File uploaded successfully! -> keyname = ' + url.replace(/[/:-]/g, '_')})
        })
      })
      console.log(image.url.replace(/[/:-]/g, '_'))
    })

  }

  res.json(parks)
})

export default handler
