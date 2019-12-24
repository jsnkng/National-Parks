import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
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
    <Events__Wrapper>
    <Grid>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
          <Col xs={12}>
            <h2>Events</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          { events.slice(0,10).map((item) => {
            return (
              <LazyLoad height={70} offset={600} key={item.id}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h3>{item.title}</h3>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    { item.images.length !== 0 &&
                    <Row>
                      <Col xs={12}>
                        <Image backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 
                          ? "/US-National-Parks-logo-sml-bw.png" 
                          : "https://www.nps.gov"+item.images[0].url } />
                      </Col>
                    </Row>
                    }
                    <Row>
                      <Col xs={12} md={8}>
                      <div  className="description">
                        <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                        </div>
                        </Col>
                      <Col xs={12} md={4}>
                      <div  className="details">
                        { item.times[0] !== undefined && item.times.length[0] !== 0 &&
                          <p><strong>Time: </strong>{item.times[0].timestart}–{item.times[0].timeend}</p> 
                        }
                        <p><strong>Location: </strong>{item.location}</p>
                        <p><strong>Cost: </strong> 
                          { item.isfree === "false" 
                          ? item.feeinfo 
                          : item.feeinfo.length !== 0 && item.isfree === true 
                            ? "FREE (" + item.feeinfo + ")" 
                            : "FREE" 
                          }
                        </p> 
                        { item.regresinfo !== "" &&
                          <p><strong>Reservations: </strong>{item.regresinfo}
                          { item.regresurl !== "" &&
                            <strong> <a href={item.regresurl} target="_blank">Click here for reservations.</a></strong>
                          }
                        </p> 
                        }
                        <p><strong>Dates: </strong>{item.dates.map((date) => toDateFormat(date)).join(', ')}</p>

                        {item.infourl !== "" &&
                          <p><strong>More Info: </strong><a href={item.infourl} target="_blank">{item.infourl}</a></p> 
                        }
                        </div>
                      </Col>
                    </Row>
                  </AccordionItemPanel>
                </AccordionItem>
              </LazyLoad>
              )
            })
          }
          </Col>
        </Row> 
      </Accordion>     
    </Grid>
    </Events__Wrapper>
  )
}
  
export default Events

const Events__Wrapper = styled.div`

  .description {
    overflow-wrap: break-word;
    div {
      ${SuperQuery().minWidth.md.css`
        padding: 0 0 .5em .4em;
      `}
    }
    ul {
      margin: 0;
      padding: 0 0 0 1em;
    }
    li {
      padding: .5em 0 0 .25em;
    }
  }
 .details {
    font-size: .875em;
    background-color: #323132;
    padding: 1em 1.5em;
    margin: 1em;
    p {
      margin: 0;
      padding:0;
    }
    ${SuperQuery().minWidth.md.css`
      margin: 1em 0;
    `}
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 15em;
  margin: 0;
  padding: 0;
  
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`