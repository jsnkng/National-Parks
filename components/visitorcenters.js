import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import formatPhoneNumber from './_utils/formatPhoneNumber'
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
          { visitorCenters.slice(0).map(item => {
            return (
          <LazyLoad height={'100%'} offset={100} key={item.id}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h3>{item.name}</h3>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Row className='introduction'>
                  <Col xs={12}>
                  <p>{item.description}</p>
                    { (item.operatingHours !== undefined && item.operatingHours.length !== 0) &&
                      (item.operatingHours[0] !== undefined && item.operatingHours[0].length !== 0) &&
                      item.operatingHours.slice(0).map(item => {
                        return (
                          <p>
                            <em>{item.description}</em>
                          </p>
                        )
                      })
                    }
                    </Col>
                </Row>
                <Row className='section'>

                  <Col xs={12} sm={6} md={4}>
                    <h4>Contact Information</h4>
                    { (item.contacts !== undefined && item.contacts.length !== 0) &&
                      (item.contacts.phoneNumbers !== undefined && item.contacts.phoneNumberslength !== 0) &&
                      item.contacts.phoneNumbers.slice(0).map(item => {
                        return (
                          <p className='introduction' key={item.phoneNumber}><strong>{item.type}</strong> <a href={`tel:${formatPhoneNumber(item.phoneNumber)}`}>{formatPhoneNumber(item.phoneNumber)}</a></p>
                        )
                      })
                    }
                    { (item.contacts !== undefined && item.contacts.length !== 0) &&
                      (item.contacts.emailAddresses !== undefined && item.contacts.emailAddresses.length !== 0) &&
                      item.contacts.emailAddresses.slice(0).map(item => {
                        return (
                          <p className='introduction' key={item.emailAddress}><strong>Email</strong> <a href={`mailto:${item.emailAddress}`}>{item.emailAddress}</a></p>
                        )
                      })
                    }

                    { (item.addresses !== undefined && item.addresses.length !== 0) &&
                      item.addresses.slice(0).map((item, index) => {
                        if (item.type.toLowerCase() === 'mailing') { 
                          return (
                            <p key={`${index}${item.line1}`}>
                              <strong>{item.type} Address</strong><br />
                              {item.line1}<br />{item.city}, {item.stateCode} {item.postalCode}
                            </p>
                          )
                        }
                      })
                    }
                    
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                    { (item.operatingHours !== undefined && item.operatingHours.length !== 0) &&
                      (item.operatingHours[0] !== undefined && item.operatingHours[0].length !== 0) &&
                        <>
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
                        </>
                      }
                    </Col>
                  <Col xs={12} md={4}>
                    <h4>Directions</h4>
                    <p>{item.directionsInfo}</p>
                    { (item.addresses !== undefined && item.addresses.length !== 0) &&
                      item.addresses.slice(0).map((item, index) => {
                        if (item.type.toLowerCase() === 'physical') { 
                          return (
                            <p key={`${index}${item.line1}`}>
                              <strong>{item.type} Address</strong><br />
                              {item.line1}<br />{item.city}, {item.stateCode} {item.postalCode}
                            </p>
                          )
                        }
                      })
                    }
                    
                    
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
  )
}
  
export default Component
