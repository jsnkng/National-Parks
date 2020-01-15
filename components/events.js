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
import Calendar from './calendar'
import SlideShow from './slideshowEvents'

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
                          <SlideShow images={item.images} />
                        </LazyLoad>
                      }
                      <div className='introduction' dangerouslySetInnerHTML={{__html:item.description}}></div>
                     
                      </Col>
                      <Col xs={12} lg={4}>
                        <Row>
                          <Col xs={12} sm={6} lg={12}>
                          <h4>Event Schedule & Details</h4>
                          <Calendar dates={item.dates} />
                          { item.times[0] !== undefined && item.times.length[0] !== 0 &&
                          <>
                            <h4>Time</h4>
                            <p>{item.times[0].timestart}–{item.times[0].timeend}</p> 
                          </>
                          }
                          {item.location !== '' &&
                            <>
                              <h4>Location</h4>
                              <p>{item.location}</p>
                            </>
                          }
                          <h4>Cost</h4> 
                          <p>{ item.isfree === 'false' 
                            ? item.feeinfo 
                            : item.feeinfo.length !== 0 && item.isfree === true 
                              ? 'FREE (' + item.feeinfo + ')' 
                              : 'FREE' 
                            }
                          </p> 

                          {(item.contactname !== '' || item.contacttelephonenumber !== '' || item.contactemailaddress !== '') &&
                            <h4>Contact</h4>
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

                            
                          </Col>
                          <Col xs={12} sm={6} lg={12}>
                            
                           
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
                                <p><a href={item.infourl} target='_blank'>{item.infourl}</a></p> 
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
 
`
