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
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
      <Grid__Container>
        <Row__Container>
          <Col__Container xs={12}>
            <h3>Events</h3>
          </Col__Container>
        </Row__Container>
        <Row__Container>
          <Col__Container xs={12}>
          { events.slice(0,10).map((item) => {
            return (
              <LazyLoad height={70} offset={600} key={item.id}>
            
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {item.title}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  
                  <AccordionItemPanel>
                    { item.images.length !== 0 &&
                        <Image backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 
                          ? "/US-National-Parks-logo-sml-bw.png" 
                          : "https://www.nps.gov"+item.images[0].url } />
                    }

                    <Row__Container>
                      <Col__Container xs={12} md={8} className="description">
                        <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                      </Col__Container>
                      <Col__Container xs={12} md={4} className="details">
                        
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

                      </Col__Container>
                    </Row__Container>
                  </AccordionItemPanel>
                </AccordionItem>
              </LazyLoad>
              )
            })
          }
          </Col__Container>
        </Row__Container> 
      </Grid__Container>
    </Accordion>     
  )
}
  
export default Events

const Grid__Container = styled(Grid)`
  padding: 0;
  
  h3 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: .5em;
    border-bottom: 2px solid #ffffff;
    ${SuperQuery().minWidth.md.css`
      margin: 0;
      padding: .25em;
    `}
  }
  .description {
    padding: .5em 1em;
    ${SuperQuery().minWidth.md.css`
      padding: 0 .25em;
    `}
  }
  .details {
    background-color: #323132;
    font-size: .875em;
    padding: .5em 1.25em ;
    margin: 1em 0 .25em 0;
    ${SuperQuery().minWidth.md.css`
      margin: -.25em 0 0 0;
    `}
  }
`
const Row__Container = styled(Row)`
`
const Col__Container = styled(Col)`
padding: 0;
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 17em;
  margin: -15px -15px 15px -15px;
  padding: 15px 15px;
  ${SuperQuery().minWidth.sm.css`
    margin: -20px -20px 20px -20px;
    padding: 20px 20px;
  `}
  ${SuperQuery().minWidth.md.css`
    margin: -30px -30px 30px -30px;
    padding: 30px 30px;
  `}
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`
