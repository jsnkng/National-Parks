import fetch from 'isomorphic-unfetch'
import nextConnect from 'next-connect'
import database from '../../../middlewares/database'
import s3Images from '../_utils/_s3Images'

const handler = nextConnect()

handler.use(database)

handler.get(async (req, res) => {
  const {
    query: { parkCode }
  } = req
  let [parks] = await req.db.collection('parks').find({ parks_id: parkCode }).toArray()

  const [alerts] = await req.db.collection('alerts').find({ parks_id: parkCode }).toArray()
  const [events] = await req.db.collection('events').find({ parks_id: parkCode }).toArray()
  const [newsreleases] = await req.db.collection('newsreleases').find({ parks_id: parkCode }).toArray()
  const [articles] = await req.db.collection('articles').find({ parks_id: parkCode }).toArray()

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
    parks.articles = await fetch(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    parks.campgrounds = await fetch(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })

    parks.parks_id = parkCode

    // Insert one JSON object 
    await req.db.collection('parks').insertOne(parks)

    // Separate function to handle checking if image exists on s3 and uploading if not
    await s3Images(parks.data[0].images)
  }

  if (alerts === undefined || alerts.length === 0) {
    parks.alerts = await fetch(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    console.log('Geet Alerts')
    parks.alerts.parks_id = parkCode
    await req.db.collection('alerts').insertOne(parks.alerts)
  } else {
    parks.alerts = alerts
  }

  if (events === undefined || events.length === 0) {
    parks.events = await fetch(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    console.log('Geet Events')
    parks.events.parks_id = parkCode
    await req.db.collection('events').insertOne(parks.events)
  } else {
    parks.events = events
  }

  if (newsreleases === undefined || newsreleases.length === 0) {
    parks.newsreleases = await fetch(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    console.log('Geet newsreleases')
    parks.newsreleases.parks_id = parkCode
    await req.db.collection('newsreleases').insertOne(parks.newsreleases)
  } else {
    parks.newsreleases = newsreleases
  }

  if (articles === undefined || articles.length === 0) {
    parks.articles = await fetch(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    console.log('Geet articles')
    parks.articles.parks_id = parkCode
    await req.db.collection('articles').insertOne(parks.articles)
  } else {
    parks.articles = articles
  }

  res.json(parks)
})

export default handler
