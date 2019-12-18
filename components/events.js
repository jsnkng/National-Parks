import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Events = props => {
  const [events, setEvents] = useState(props.events)
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return Intl.DateTimeFormat('en-US').format(nd)
  }

  return (
    <AccordionWrapper allowZeroExpanded={true} allowMultipleExpanded={true}>
      <Grid__Container>
        <Row__Container>
          <Col__Container xs={12}>
            <h3>Events</h3>
          </Col__Container>
        </Row__Container>
        { events.slice(0,6).map((item) => {
          return (
        <Row__Container>
          <Col__Container xs={12}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {item.title}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
        { item.images.length !== 0 &&
              <Row__Container>
                <Col__Container xs={12} md={6} >
                  <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                </Col__Container>
                <Col__Container xs={12} md={3} className="details">
                  {item.times[0] !== undefined && item.times.length[0] !== 0 &&
                    <p><strong>Time:</strong> {item.times[0].timestart}–{item.times[0].timeend}</p> 
                  }
                  <p><strong>Location:</strong> {item.location}</p>
                  <p><strong>Cost:</strong> {item.isfree === "false" ? item.feeinfo : item.feeinfo.length !== 0 && item.isfree === true ? "FREE (" + item.feeinfo + ")" : "FREE" }</p> 
                  {item.regresinfo !== "" &&
                    <p><strong>Reservations:</strong> {item.regresinfo}
                    {item.regresurl !== "" &&
                      <strong><a href={item.regresurl} target="_blank"> Click here for reservations.</a></strong>
                    }
                  </p> 
                  }
                  <p><strong>Dates:</strong> {item.dates.map((date) => toDateFormat(date)).join(', ')}</p>
                  {item.infourl !== "" &&
                    <p><strong>More Info:</strong> <a href={item.infourl} target="_blank">{item.infourl}</a></p> 
                  }
                  </Col__Container>
                  <Col__Container xs={12} md={3}>
                    <Image backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 ? "/US-National-Parks-logo-sml-bw.png" : "https://www.nps.gov"+item.images[0].url } />
                  </Col__Container>
                </Row__Container>
             
        }
        { item.images.length === 0 &&
              <Row__Container>
                <Col__Container xs={12} sm={12} md={6}>
                  <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                </Col__Container>
                <Col__Container xs={12} sm={12} md={6} className="details">
                  {item.times[0] !== undefined && item.times.length[0] !== 0 &&
                    <p><strong>Time:</strong> {item.times[0].sunrisestart === "true" ? "Sunrise" : item.times[0].timestart}–{item.times[0].sunsetend === "true" ? "Sunset" : item.times[0].timeend}</p>
                  }
                  {item.location !== undefined && item.location.length !== 0 &&
                    <p><strong>Location:</strong> {item.location}</p>
                  }
                  <p><strong>Cost:</strong> {item.isfree === "false" ? item.feeinfo : item.feeinfo.length !== 0 && item.isfree === "true" ? "FREE (" + item.feeinfo + ")" : "FREE" }</p> 
                  {item.regresinfo !== "" &&
                    <p><strong>Reservations:</strong> {item.regresinfo}
                    {item.regresurl !== "" &&
                      <strong><a href={item.regresurl} target="_blank"> Click here for reservations.</a></strong>
                    }
                  </p> 
                  }
                  <p><strong>Dates:</strong> {item.dates.map((date) => toDateFormat(date)).join(', ')}</p>
                </Col__Container>
              </Row__Container>
        }
            </AccordionItemPanel>
          </AccordionItem>
          </Col__Container>
        </Row__Container> 
        )}
      )
    }
           
    </Grid__Container>
  </AccordionWrapper>


  )
}
  
export default Events
const AccordionWrapper = styled(Accordion)`
  padding: 1em 1em 0 .5em;
}`

const Grid__Container = styled(Grid)`
  word-wrap:break-word;
  padding: 1em 1em 0 .5em;
  h3 {
    display: inline;
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  a {
    padding: 0;
  }
  p {
      padding:0;
      margin:0;
  }
  .details {
      margin:.25em 0 0 0;
    p {
      font-size: .85em;
      padding:0;
      margin:0;
    ${SuperQuery().minWidth.md.css`
      font-size: .75em;
    `}
    } 
    strong {
      font-weight: 600;
    }
  }
  
`
const Row__Container = styled(Row)`
  margin: 0;
  &:first-child {
    padding: 0;
    border-bottom: 1px solid;
  }
  &:last-child {
    border: none;
  }
  ${SuperQuery().minWidth.md.css`
    background-color: transparent;
  `}
`
const Col__Container = styled(Col)`
  margin: 0;
  padding: 0;
  

  ${SuperQuery().minWidth.md.css`
    margin: 0;
    border: 0px solid;
    &:nth-child(2){
      padding: 0 .5em;
    }

  `}
  ${SuperQuery().minWidth.lg.css`
    margin: 0;
    border: 0px solid;
    &:nth-child(2){
      padding: 0 1em;
    }

  `}


`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 12em;
  margin: .625em 0 .625em 0;
  ${SuperQuery().minWidth.md.css`
    margin: .25em 0;
  `}
`
