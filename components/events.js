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
  const delayForceCheck = () => {
    setTimeout(forceCheck, 10)
  }
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
            { events.slice(0,10).map((item, index) => {
              return (
              <AccordionItem onClick={delayForceCheck} key={`${index}${item.id}`}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h3>{item.title}</h3>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Row className='events__row--reversible'>
                      
                      <Col xs={12} lg={4} className='section details'>
                        <Row>

                          <Col xs={12} sm={6} md={4}>
                            <Calendar dates={item.dates} />
                          </Col>

                          <Col xs={12} sm={6} md={8} lg={12}>
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
                      <Col xs={12} lg={8}>
                      { item.images.length !== 0 && item.images[0] && item.images[0].url !== undefined &&
                        <LazyLoad offset={300} height={'15rem'}>
                          <SlideShow__Decorated>
                            <SlideShow 
                              images={item.images.map((item, index) => ({ id: index+item.url, url: `https://www.nps.gov${item.url}`, caption: item.caption}))} 
                              dimensions={{xl: false, height: '100%', width: '100%', 'minHeight': '15rem', 'minWidth': '100%'}}  />
                          </SlideShow__Decorated>
                        </LazyLoad>
                        }
                        <div className='introduction' dangerouslySetInnerHTML={{__html:item.description}}></div>
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
  .events__row--reversible {
    flex-direction: column-reverse;
    padding: .3125rem 0;
    ${SuperQuery().minWidth.lg.css`
      flex-direction: row;
    `}
  }
  h5 {
    font-size:1.5rem;
  }
  p {
    font-size:1.25rem;
  }
`
const SlideShow__Decorated = styled.div`
    height: 60vw;
    min-height: 15rem;
  ${SuperQuery().minWidth.sm.css`
    max-height: 23rem;
  `}
  ${SuperQuery().minWidth.md.css`
    height: 29rem;
    max-height: 29rem;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 26rem;
    max-height: 26rem;
  `}
`
