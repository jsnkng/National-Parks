import fetch from 'isomorphic-unfetch'
import nextConnect from 'next-connect'
import database from '../../../middlewares/database'
import s3Images from '../_utils/_s3Images'

const handler = nextConnect()

const fetchWithErrorHandling = async url => {
  try {
    return await (await fetch(url)).json()
  } catch (err) {
    return { error: true }
  }
}

handler.use(database)

handler.get(async (req, res) => {
  const {
    query: { parkCode }
  } = req
  let [parks] = await req.db.collection('parks').find({ parks_id: parkCode }).toArray()

  if (parks === undefined || parks.length === 0) {
    console.log('parks was undefined or length 0')
    parks = await fetchWithErrorHandling(`${process.env.NPS_URI}/parks?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    parks.people = await fetchWithErrorHandling(`${process.env.NPS_URI}/people?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    parks.places = await fetchWithErrorHandling(`${process.env.NPS_URI}/places?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    parks.visitorcenters = await fetchWithErrorHandling(`${process.env.NPS_URI}/visitorcenters?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    parks.articles = await fetchWithErrorHandling(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    parks.campgrounds = await fetchWithErrorHandling(`${process.env.NPS_URI}/campgrounds?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    parks.parks_id = parkCode

    // Insert one JSON object 
    await req.db.collection('parks').insertOne(parks)

    // Separate function to handle checking if image exists on s3 and uploading if not
    await s3Images(parks.data[0].images)
  }


  const [alerts] = await req.db.collection('alerts').find({ parks_id: parkCode }).toArray()
  if (alerts === undefined || alerts.length === 0) {
    parks.alerts = await fetchWithErrorHandling(`${process.env.NPS_URI}/alerts?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    console.log('Geet Alerts')
    parks.alerts.parks_id = parkCode
    await req.db.collection('alerts').insertOne(parks.alerts)
  } else {
    parks.alerts = alerts
  }

  const [events] = await req.db.collection('events').find({ parks_id: parkCode }).toArray()
  if (events === undefined || events.length === 0) {
    parks.events = await fetchWithErrorHandling(`${process.env.NPS_URI}/events?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    console.log('Geet Events')
    parks.events.parks_id = parkCode
    await req.db.collection('events').insertOne(parks.events)
  } else {
    parks.events = events
  }

  const [newsreleases] = await req.db.collection('newsreleases').find({ parks_id: parkCode }).toArray()

  if (newsreleases === undefined || newsreleases.length === 0) {
    parks.newsreleases = await fetchWithErrorHandling(`${process.env.NPS_URI}/newsreleases?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    console.log('Geet newsreleases')
    parks.newsreleases.parks_id = parkCode
    await req.db.collection('newsreleases').insertOne(parks.newsreleases)
  } else {
    parks.newsreleases = newsreleases
  }

  const [articles] = await req.db.collection('articles').find({ parks_id: parkCode }).toArray()
  if (articles === undefined || articles.length === 0) {
    parks.articles = await fetchWithErrorHandling(`${process.env.NPS_URI}/articles?parkCode=${parkCode}&fields=images&api_key=${process.env.NPS_KEY}`)

    console.log('Geet articles')
    parks.articles.parks_id = parkCode
    await req.db.collection('articles').insertOne(parks.articles)
  } else {
    parks.articles = articles
  }

  res.json(parks)
})

export default handler
