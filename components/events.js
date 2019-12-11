import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

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
    <Container>
      <h3>Events</h3>
      <Group>
        <Row>
          { events.slice(0,6).map((item) => {
            return(
              <Col xs={12} sm={6} md={4} key={item.id}>
                <Item>
                <a href={item.infourl} target="_blank"><Image backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 ? "/US-National-Parks-logo-sml-bw.png" : "https://www.nps.gov"+item.images[0].url } /></a>
                
                <h6>{item.dates.map((date) => toDateFormat(date)).join(', ')}</h6>
                <h4><a href={item.infourl} target="_blank">{item.title}</a></h4>
                <h5>{item.location}</h5>
                <p dangerouslySetInnerHTML={{__html:item.description}} />
                </Item>
              </Col>
            )
        })
        }
        </Row>
      </Group>
    </Container>
  )
}
  
export default Events

const Container = styled(Grid)`
  background-color: #d7d6cb;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  h3 {
    color: #d7d6cb;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
    font-size: .75em;
    width: 50%;
    margin-left: 4%;
    float: left;
  }
  h5 {
    font-size: .75em;
    width: 50%;
    margin-left: 4%;
    float: left;
  }
  h6 {
    clear: both;
    padding: 5px;
    font-size: .75em;
  }
  p{
    font-size: .9em;
  }
  
`
const Group = styled.div`
  padding: 10px;
`
const Item = styled.div`
  flex: 1 1 300px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10px 0px;
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 40vw;
  min-width: 140px;
  max-width: 40%;
  height: 10vw;
  min-height: 100px;
  max-height: 140px;
  margin: 0;
`

