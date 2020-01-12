import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import formatPhoneNumber from './_utils/formatPhoneNumber'

import MapLive__Component from './maplive'

const Component = ({ park, markers }) => {
  return (
    <VisitorInfo>
      <Row__Decorated>
        <Col xs={12}>
          <h2>Visitor Information</h2>
        </Col>
      </Row__Decorated>
      <Row__Decorated>
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
      </Row__Decorated>
      <Row__Decorated className='content'>
       
        <Col xs={12} md={4}>
        <h3>Contact Information</h3>
          { (park.contacts !== undefined && park.contacts.length !== 0) &&
            (park.contacts.phoneNumbers !== undefined && park.contacts.phoneNumberslength !== 0) &&
            park.contacts.phoneNumbers.slice(0).map(item => {
              return (
                <p key={item.phoneNumber}><strong>{item.type}</strong> <a href={`tel:${formatPhoneNumber(item.phoneNumber)}`}>{formatPhoneNumber(item.phoneNumber)}</a></p>
              )
            })
          }
          { (park.contacts !== undefined && park.contacts.length !== 0) &&
            (park.contacts.emailAddresses !== undefined && park.contacts.emailAddresses.length !== 0) &&
            park.contacts.emailAddresses.slice(0).map(item => {
              return (
                <p key={item.emailAddress}><strong>Email</strong> <a href={`mailto:${item.emailAddress}`}>{item.emailAddress}</a></p>
              )
            })
          }
          { (park.addresses !== undefined && park.addresses.length !== 0) &&
            (park.addresses !== undefined && park.addresses.length !== 0) &&
            park.addresses.slice(0).map(item => {
            if (item.type.toLowerCase() === 'mailing') 
              { 
                return (
                  <p className='location__address' key={item.line1}><strong>{item.type} Address</strong><br /><span>{item.line1}<br />{item.city}, {item.stateCode} {item.postalCode}</span></p>
                )
              }
            })
          }
        </Col> 
        <Col xs={12} md={4}>
          { park.directionsInfo !== undefined && 
            <>
              <h3>Location & Directions</h3>
              <p>{park.directionsInfo}</p>
            </>
          }
          { (park.addresses !== undefined && park.addresses.length !== 0) &&
            (park.addresses !== undefined && park.addresses.length !== 0) &&
            park.addresses.slice(0).map(item => {
              if (item.type.toLowerCase() === 'physical') 
                { 
                  return (
                    <p className='location__address' key={item.line1}><strong>{item.type} Address</strong><br /><span>{item.line1}<br />{item.city}, {item.stateCode} {item.postalCode}</span></p>
                  )
                }
            })
          }</Col>
        <Col xs={12} md={4}>
          {park.weatherInfo !== "" && 
            <>
              <h3>Weather</h3>
              <p>{park.weatherInfo}</p>
            </>
          }
        </Col>
      
      </Row__Decorated>
    </VisitorInfo>
  )
}
export default Component

const VisitorInfo = styled(Grid)`
  padding: 1rem .25rem;
  .content {
    padding: 1rem;
  }

  p {
      font-size: 1.25rem;
      ${SuperQuery().minWidth.sm.css`
        font-size: 1rem;
      `}
    }
`

const MapLive__Wrapper = styled.div`
  position:relative;
  height: 42vh;
  margin: .5rem .125rem .5rem .125rem;
  padding:  0;
  z-index: 10;

  ${SuperQuery().maxWidth.of('896px').and.maxHeight.of('414px').and.landscape.css`
    height: 100vh;
  `}  
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
