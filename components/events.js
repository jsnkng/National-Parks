import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Email from './elements/email'
import Phone from './elements/phone'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Calendar from './elements/calendar'
import SlideShow from './elements/slideshow'

const Component = ({ events }) => {
  return (
    <Events>
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
                <AccordionItem key={item.id} onClick={()=>setTimeout(forceCheck, 10)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h3>{item.title}</h3>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Row>
                      <Col xs={12} lg={8}>
                      { item.images.length !== 0 && item.images[0].url !== undefined &&
                        <LazyLoad offset={0}>
                          <SlideShow__Decorated>
                            <SlideShow images={item.images.map((item, index) => ({ id: index+item.url, url: `https://www.nps.gov${item.url}`, caption: item.caption}))} />
                          </SlideShow__Decorated>
                        </LazyLoad>
                      }
                        <div className='introduction' dangerouslySetInnerHTML={{__html:item.description}}></div>
                     
                      </Col>
                      <Col xs={12} lg={4} className='section details'>
                        <h4>Event Schedule & Details</h4>
                        <Row className='reversible'>
                         
                          <Col xs={12} sm={7} md={7} lg={12}>
                            <Calendar dates={item.dates} />
                          </Col>
                          <Col xs={12} sm={5} md={5} lg={12}>
                          { item.times[0] !== undefined && item.times.length[0] !== 0 &&
                          <>
                            <h5>Time</h5>
                            {item.times[0].timestart === '12:00 AM' && item.times[0].timeend === '12:00 AM' &&
                              <p>All Day</p>
                            }
                            {item.times[0].timestart !== '12:00 AM' && item.times[0].timeend !== '12:00 AM' &&
                            <p>{item.times[0].timestart}–{item.times[0].timeend}</p> 
                            }
                            <p>{item.timeinfo}</p>
                          </>
                          }
                          {item.category !== '' &&
                            <>
                              <h5>Type</h5>
                              <p>{item.category}: {item.types.join(', ')}</p>
                            </>
                          }
                          {item.location !== '' &&
                            <>
                              <h5>Location</h5>
                              <p>{item.location}</p>
                            </>
                          }
                          <h5>Cost</h5> 
                          <p>{ item.isfree === 'false' 
                            ? item.feeinfo 
                            : item.feeinfo.length !== 0 && item.isfree === true 
                              ? 'FREE (' + item.feeinfo + ')' 
                              : 'FREE' 
                            }
                          </p> 

                          {item.contactname !== '' &&
                            <h5>Contact</h5>
                          }
                            {item.contactname !== '' &&
                              <>
                                <p>{item.contactname}</p>
                              </>
                            }

                            {item.contacttelephonenumber !== '' &&
                              <Phone
                                title='Telephone'
                                phoneNumber={item.contacttelephonenumber} />
                            }

                            {item.contactemailaddress !== '' &&
                              <Email 
                                title={`Email Address`}
                                emailAddress={item.contactemailaddress} />
                            }

                            { item.regresinfo !== '' &&
                              <p><strong>Reservations: </strong>{item.regresinfo}
                              { item.regresurl !== '' &&
                                <strong> <a href={item.regresurl} target='_blank'>Click here for reservations.</a></strong>
                              }
                            </p> 
                            }
                            {item.infourl !== '' &&
                              <>
                                <h5>More Info</h5>
                                <p><a href={item.infourl} target='_blank' rel="noreferrer">{item.infourl}</a></p> 
                              </>
                            }
                            
                          </Col>

                        </Row>
                      </Col>
                    </Row>
                  </AccordionItemPanel>
                </AccordionItem>
                )
              })
            }
            </Col>
          </Row> 
        </Accordion>  
      </Grid>  
    </Events>
  )
}
  
export default Component

const Events = styled.div`
  .section {
    margin-top:0;
    padding-top:0;
    ${SuperQuery().minWidth.lg.css`
      border: 0;
    `}
  }
`
const SlideShow__Decorated = styled.div`
  ${SuperQuery().minWidth.sm.css`
    height: 18rem;
  `}
  ${SuperQuery().minWidth.md.css`
    height: 22rem;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 28rem;
  `}
`
