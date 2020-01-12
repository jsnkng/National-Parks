import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
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
    <VisitorCenters>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row__Decorated>
          <Col xs={12}>
            <h2>Visitor Centers</h2>
          </Col>
        </Row__Decorated>
        <Row__Decorated>
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
                <AccordionItemPanel className="description">
                 <Row__Decorated>
                  
                  <Col xs={12} md={4}>
                    <Row>
                      <Col xs={6} md={12}>
                    <h4>Contact Information</h4>
                    { (item.contacts !== undefined && item.contacts.length !== 0) &&
                      (item.contacts.phoneNumbers !== undefined && item.contacts.phoneNumberslength !== 0) &&
                      item.contacts.phoneNumbers.slice(0).map(item => {
                        return (
                          <p key={item.phoneNumber}><strong>{item.type}:</strong> <a href={`tel:${formatPhoneNumber(item.phoneNumber)}`}>{formatPhoneNumber(item.phoneNumber)}</a></p>
                        )
                      })
                    }
                    { (item.contacts !== undefined && item.contacts.length !== 0) &&
                      (item.contacts.emailAddresses !== undefined && item.contacts.emailAddresses.length !== 0) &&
                      item.contacts.emailAddresses.slice(0).map(item => {
                        return (
                          <p key={item.emailAddress}><strong>Email:</strong> <a href={`mailto:${item.emailAddress}`}>{item.emailAddress}</a></p>
                        )
                      })
                    }
                    { (item.addresses !== undefined && item.addresses.length !== 0) &&
                      (item.addresses !== undefined && item.addresses.length !== 0) &&
                      item.addresses.slice(0).map(item => {
                      if (item.type.toLowerCase() === 'mailing') 
                        { 
                          return (
                            <p className='location__address' key={item.line1}><strong>{item.type} Address</strong><br /><span>{item.line1}<br />{item.city}, {item.stateCode} {item.postalCode}</span></p>
                          )
                        }
                      })
                    }</Col>
                      <Col xs={6} md={12}>
                    { (item.operatingHours !== undefined && item.operatingHours.length !== 0) &&
                      (item.operatingHours[0] !== undefined && item.operatingHours[0].length !== 0) &&
                      item.operatingHours.slice(0).map(item => {
                        return (
                          <>
                          <h4>Hours of Operation</h4>
                          <p key={item.name}>
                            <table>
                              <tbody>
                                <tr>
                                  <th>Sunday</th>
                                  <td>{item.standardHours.sunday}</td>
                                </tr>
                                <tr>
                                  <th>Monday</th>
                                  <td>{item.standardHours.monday}</td>
                                </tr>
                                <tr>
                                  <th>Tuesday</th>
                                  <td>{item.standardHours.tuesday}</td>
                                </tr>
                                <tr>
                                  <th>Wednesday</th>
                                  <td>{item.standardHours.wednesday}</td>
                                </tr>
                                <tr>
                                  <th>Thursday</th>
                                  <td>{item.standardHours.thursday}</td>
                                </tr>
                                <tr>
                                  <th>Friday</th>
                                  <td>{item.standardHours.friday}</td>
                                </tr>
                                <tr>
                                  <th>Saturday</th>
                                  <td>{item.standardHours.saturday}</td>
                                </tr>
                              </tbody>
                            </table>
                            <em>{item.description}</em>
                          </p>
                          </>
                        )
                      })
                    }
                    </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={8}>
                    <h4>General Information</h4>
                    <p>{item.description}</p>
                    <h4>Directions</h4>
                    <p>{item.directionsInfo}</p>
                    
                    { (item.addresses !== undefined && item.addresses.length !== 0) &&
                      (item.addresses !== undefined && item.addresses.length !== 0) &&
                      item.addresses.slice(0).map(item => {
                        if (item.type.toLowerCase() === 'physical') 
                          { 
                            return (
                              <p className='location__address' key={item.line1}><strong>{item.type} Address</strong><br /><span>{item.line1}<br />{item.city}, {item.stateCode} {item.postalCode}</span></p>
                            )
                          }
                      })
                    }
                    
                  </Col>
                  </Row__Decorated>
                </AccordionItemPanel>
              </AccordionItem>
            </LazyLoad>
            )
            })
          }
          </Col>
        </Row__Decorated>
      </Accordion>
    </VisitorCenters>
  )
}
  
export default Component

const VisitorCenters = styled(Grid)`
  padding: 1rem .25rem;
  .description {
    font-size: 1rem;
    overflow-wrap: break-word;
    padding: .5rem .5rem 1rem .5rem;
    margin: 0;
    ul {
      margin: 0;
      padding: 0 0 0 1rem;
    }
    li {
      padding: .5rem 0 0 .25rem;
    }
    em {
      font-size: .875rem;
    }
    table {
      width: 13rem;
      border-spacing: 0;
    }
    th {
      text-align: left;
      font-size: .875rem;
    }
    td {
      text-align: right;
      font-size: .875rem;
    }
    .location__address {
      position: relative;
      strong {
      }
      span {
        line-height: 1.2;
      }
    }
  }
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
