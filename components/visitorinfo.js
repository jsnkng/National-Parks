import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import formatPhoneNumber from './_utils/formatPhoneNumber'
import Alerts from './alerts'

import Address from './elements/address'
import Email from './elements/email'
import Phone from './elements/phone'
import MapLive__Component from './maplive'
import EntryFees from './entryfees'

const Component = ({ park, alerts, markers }) => {
  return (
    <VisitorInfo>
      <Grid>
        <Row>
          <Col xs={12}>
            { alerts !== undefined && alerts.length != 0 &&
              <Alerts alerts={alerts} />
            }
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <h2>Visitor Information</h2>
          </Col>
        </Row>
        
        <Row>
          <Col xs={12}>
          { park.latLong !== '' && 
            <Col xs={12}>
              <MapLive__Wrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>
                <MapLive__Component
                  latLong={park.latLong}
                  name={park.name}
                  designation={park.designation}
                  zoom={10}
                  markers={markers}
                />
              </MapLive__Wrapper>
            </Col>
          }
          </Col>
        </Row>
        
        <Row>
        { ((park.contacts !== '' && park.contacts.length !== 0) ||
          (park.addresses !== '' && park.addresses.length !== 0)) &&
          <Col xs={12} md={4}>
            <Row>
            { ((park.contacts !== undefined && park.contacts.length !== 0) ||
              (park.addresses !== undefined && park.addresses[0].length !== 0)) &&
              <Col xs={12} md={12} >
                <h4>Contact Information</h4>
                <Row>
                {(park.contacts.phoneNumbers !== undefined && park.contacts.phoneNumberslength !== 0) &&
                  park.contacts.phoneNumbers.slice(0,2).map((park, index) => {
                    return (
                      
                        <Col xs={6} sm={6} md={12} lg={6}>
                          <Phone key={`${index}${park.line1}`} 
                          title={park.type}
                          phoneNumber={park.phoneNumber} />
                        </Col>
                    )
                  })
                }
                {(park.contacts.emailAddresses !== undefined && park.contacts.emailAddresses.length !== 0) &&
                  park.contacts.emailAddresses.slice(0,1).map((park, index) => {
                    return (
                        <Col xs={12}>
                          <Email key={`${index}${park.line1}`} 
                            title={`Email Address`}
                            emailAddress={park.emailAddress} />
                        </Col>
                    )
                  })
                }
                {(park.addresses !== undefined && park.addresses.length !== 0) &&
                  park.addresses.slice(0,2).map((park, index) => {
                    return (
                        <Col xs={6} sm={6} md={12} lg={6}>
                          <Address key={`${index}${park.line1}`} 
                            title={`${park.type} Address`}
                            address={park} />
                        </Col>
                      
                    )
                  })
                }
                </Row>
              </Col>
            }
            </Row>
          </Col>
        }
          <Col xs={12} md={8}>
            { park.directionsInfo !== undefined && 
              <>
                <h3>Directions</h3>
                <p>{park.directionsInfo}</p>
              </>
            }
            { park.weatherInfo !== '' && 
              <>
                <h3>Weather</h3>
                <p>{park.weatherInfo}</p>
              </>
            }
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            { (park.entranceFees !== undefined && park.entranceFees.length !== 0) &&
              <EntryFees title='Park Entry Fees' fees={park.entranceFees} />
            }
          </Col>
        </Row>
      </Grid>
    </VisitorInfo>
  )
}
export default Component

const VisitorInfo = styled.div`

`

const MapLive__Wrapper = styled.div`
  position:relative;
  height: 25rem;
  margin: .5rem -0.5rem 1.25rem -0.5rem;
  padding:  0;
  z-index: 10;

  ${SuperQuery().maxWidth.of('896px').and.maxHeight.of('414px').and.landscape.css`
    height: 100vh;
  `}  
`

