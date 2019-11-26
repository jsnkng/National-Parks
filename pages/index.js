import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import Masthead from '../components/masthead';
import Map from '../components/map';

const Home = () => {
  
const NPS_KEY="O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj"
const NPS_API="https://developer.nps.gov/api/v1"
const DB_URL="mongodb+srv://national_parks:1Y5QMu6632vZ3QtF@cluster0-pexqw.mongodb.net/NationalParkService_Cache?retryWrites=true&w=majority"

// NPS API
const NPS_API1 = process.env.NPS_API
const NPS_KEY1 = process.env.NPS_KEY

// // Connection URL
const DB_URL1 = process.env.DB_URL

  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <Masthead pageTitle="National Park Service"></Masthead>
    <Map />
    
    <div>
      Secrets{NPS_API1}, {NPS_KEY1}, {DB_URL1}
      Hello{NPS_API}, {NPS_KEY}, {DB_URL}
    </div>
                  
  </>
  )
        }


export default Home
