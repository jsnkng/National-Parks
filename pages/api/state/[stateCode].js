import fetch from 'isomorphic-unfetch'
import nextConnect from 'next-connect'
import database from '../../../middlewares/database'

const handler = nextConnect()

handler.use(database)

handler.get(async (req, res) => {
  const {
    query: { stateCode }
  } = req
  let [state] = await req.db.collection('states').find({ state_id: stateCode }).toArray()

  if (state === undefined || state.length === 0) {
    state = await fetch(`${process.env.NPS_URI}/parks?stateCode=${stateCode}&fields=images&api_key=${process.env.NPS_KEY}`)
      .then(fetchResponse => fetchResponse.json())
      .catch(err => {
        console.log(err.stack)
      })
    state.state_id = stateCode
    await req.db.collection('states').insertOne(state)
  }

  res.json(state)
})

export default handler
