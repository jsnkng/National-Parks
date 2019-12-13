import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const Events = props => {
  const [events, setEvents] = useState(props.events)
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return Intl.DateTimeFormat('en-US').format(nd)
  }

  console.log(events)
  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container>
          <h3>Events at the Park</h3>
        </Col__Container>
      </Row__Container>
      { events.slice(0,6).map((item) => {
        return(
          <Row__Container key={item.id}>
            {item.images.length !== 0 &&
              <>
              <Col__Container xs={12} sm={4} md={4}>
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{__html:item.description}}></div>
              </Col__Container>
              <Col__Container xs={12} sm={4} md={4} className="details">
                {item.times[0] !== undefined && item.times.length[0] !== 0 &&
                  <p><strong>Time:</strong> {item.times[0].timestart}–{item.times[0].timeend}</p> 
                }
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Dates:</strong> {item.dates.map((date) => toDateFormat(date)).join(', ')}</p>
              </Col__Container>
              <Col__Container xs={12} sm={4} md={4}>
                <Image backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 ? "/US-National-Parks-logo-sml-bw.png" : "https://www.nps.gov"+item.images[0].url } />
              </Col__Container>
</>
 }
            {item.images.length === 0 &&
              <>
              <Col__Container xs={12} sm={8} md={8}>
                <h4>{item.title}</h4>
                <div dangerouslySetInnerHTML={{__html:item.description}}></div>
              </Col__Container>
              <Col__Container xs={12} sm={4} md={4}>
                {item.times[0] !== undefined && item.times.length[0] !== 0 &&
                <p><strong>Time:</strong> {item.times[0].timestart}–{item.times[0].timeend}</p>
                }
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Dates:</strong> {item.dates.map((date) => toDateFormat(date)).join(', ')}</p>
              </Col__Container>
              </>
            }
          </Row__Container>
        )
    })}
    </Grid__Container>
  )
}
  
export default Events

const Grid__Container = styled(Grid)`
  padding: 1em 1em 0 1em;
  h3 {
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h4 {
    font-size: 1.5em;
    margin: 0;
    padding: 0;
  }
  ul {
    font-size: .825em;
    padding: 0 0 0 1.125em ;
  } 
  a {
    font-size: .825em;
    padding: 0;
  }
  .details {
    p {
      font-size: .75em;
      padding: .25em 0 0 0;
    } 
    strong {
      font-weight: 600;
    }
  }
  
`
const Row__Container = styled(Row)`
  padding: 1em;
  margin: .5em 0;
  border-bottom:1px solid;
  ${SuperQuery().minWidth.sm.css`
    background-color: transparent;
    color: #ffffff;
    padding: .5em 0 1em 0;
    border: 0px solid;
    border-bottom: 1px solid;
  `}
`
const Col__Container = styled(Col)`
  margin: 0;
  padding: 0 .5em 0 0;
  &:nth-child(2){
    padding: 0 .5em;
  }
  &:nth-child(3){
    padding: 0 0 0 .5em;
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 160px;
  margin: .5em 0 1em 0;
`
