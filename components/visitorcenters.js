import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Address from './elements/address'
import Email from './elements/email'
import Phone from './elements/phone'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Component = ({ visitorCenters }) => {
  return (  
    <Grid>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
          <Col xs={12}>
            <h2>Visitor Centers</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            { visitorCenters.slice(0).map((item, index) => {
              return (
              <AccordionItem onClick={()=>setTimeout(forceCheck, 10)} key={`${index}${item.id}`}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h3>{item.name}</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
            <LazyLoad height={'100%'} offset={100}>
                  <Row>
                    <Col xs={12}>
                    <p className='introduction'>{item.description}</p>
                      { (item.operatingHours !== undefined && item.operatingHours.length !== 0) &&
                        (item.operatingHours[0] !== undefined && item.operatingHours[0].description !== '') &&
                        <p><em>{item.operatingHours[0].description}</em></p>
                      }
                      </Col>
                  </Row>
                  <Row className='section'>
                  { ((item.contacts !== undefined && item.contacts.length !== 0) ||
                    (item.addresses !== undefined && item.addresses[0].length !== 0)) &&
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <h4>Contact Information</h4>
                      <Row>
                      {(item.contacts.phoneNumbers !== undefined && item.contacts.phoneNumberslength !== 0) &&
                        item.contacts.phoneNumbers.slice(0,2).map((item, index) => {
                          return (
                            <Col xs={6} sm={12} lg={6} key={`${index}${item.phoneNumber}`}>
                              <Phone 
                              title={item.type}
                              phoneNumber={item.phoneNumber} />
                            </Col>
                          )
                        })
                      }
                      {(item.contacts.emailAddresses !== undefined && item.contacts.emailAddresses.length !== 0) &&
                        item.contacts.emailAddresses.slice(0,1).map((item, index) => {
                          return (
                            <Col xs={12} key={`${index}${item.emailAddresses}`}>
                              <Email
                                title={`Email Address`}
                                emailAddress={item.emailAddress} />
                            </Col>
                          )
                        })
                      }
                      {(item.addresses !== undefined && item.addresses.length !== 0) &&
                        item.addresses.slice(0,2).map((item, index) => {
                          return (
                            <Col xs={6} sm={12} lg={6} key={`${index}${item.line1}`}>
                              <Address 
                                title={`${item.type} Address`}
                                address={item} />
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </Col>
                  }
                  
                  { (item.operatingHours !== undefined && item.operatingHours.length !== 0) &&
                    (item.operatingHours[0] !== undefined && item.operatingHours[0].length !== 0) &&
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <h4>Hours of Operation</h4>
                      <table className='hours introduction'>
                        <tbody>
                          <tr>
                            <th>Sunday</th>
                            <td>{item.operatingHours[0].standardHours.sunday}</td>
                          </tr>
                          <tr>
                            <th>Monday</th>
                            <td>{item.operatingHours[0].standardHours.monday}</td>
                          </tr>
                          <tr>
                            <th>Tuesday</th>
                            <td>{item.operatingHours[0].standardHours.tuesday}</td>
                          </tr>
                          <tr>
                            <th>Wednesday</th>
                            <td>{item.operatingHours[0].standardHours.wednesday}</td>
                          </tr>
                          <tr>
                            <th>Thursday</th>
                            <td>{item.operatingHours[0].standardHours.thursday}</td>
                          </tr>
                          <tr>
                            <th>Friday</th>
                            <td>{item.operatingHours[0].standardHours.friday}</td>
                          </tr>
                          <tr>
                            <th>Saturday</th>
                            <td>{item.operatingHours[0].standardHours.saturday}</td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                    }
                    { item.directionsInfo !== '' &&
                    <Col xs={12} md={4} lg={4}>
                      <h4>Directions</h4>
                      <p>{item.directionsInfo}</p>
                    </Col>
                    }
                  </Row>
                  </LazyLoad>
                </AccordionItemPanel>
              </AccordionItem>
            )
          })
        }
          </Col>
        </Row>
      </Accordion>
    </Grid>
  )
}
  
export default Component
