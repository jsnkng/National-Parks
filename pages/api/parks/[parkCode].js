import fetch from 'isomorphic-unfetch'
import nextConnect from 'next-connect'
import database from '../../../middlewares/database'

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
  }

  res.json(parks)
})

export default handler
