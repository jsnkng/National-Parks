import React from 'react'
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad, { forceCheck } from 'react-lazyload'
import EntryFees from './entryfees'
import MapLive__Component from './elements/maplive'
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

import SlideShow from './elements/slideshow'

const Component = ({ campgrounds }) => {
  return (
    <Campgrounds>
      <Grid>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <Row>
            <Col xs={12}>
              <h2>Campgrounds</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              { campgrounds.slice(0).map((item, index) => {
              return(
             <LazyLoad offset={120} key={`${index}${item.id}`}>
              <AccordionItem onClick={()=>setTimeout(forceCheck, 10)}>
                <AccordionItemHeading onMouseDown={()=>setTimeout(forceCheck, 200)}>
                  <AccordionItemButton>
                    <h3>{item.name}</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Row>
                    <Col xs={12}>
                      { item.images !== undefined &&  
                      <SlideShow__Decorated>
                        <SlideShow images={item.images.map((item, index) => ({ id: index+item.url, url: item.url, caption: item.caption}))} />
                      </SlideShow__Decorated>
                      }
                      <p className='introduction'>{item.description}</p>
                      {(item.operatingHours !== undefined && item.operatingHours.length !== 0) &&
                        (item.operatingHours[0] !== undefined && item.operatingHours[0].length !== 0) &&
                        <p><em>{item.operatingHours[0].description}</em></p>
                      }
                    </Col>
                  </Row>

                  {item.latLong !=='' &&
                  <Row>
                    <Col xs={12}>
                      <MapLive__Wrapper style={{ display : item.latLong != '' ? ' block' : ' none'}}>
                        <MapLive__Component
                          latLong={item.latLong}
                          name={item.name}
                          designation={item.description}
                          zoom={13}
                          markers={[{id: item.id, latLong: item.latLong, name: item.name, description: item.description}]}
                        />
                      </MapLive__Wrapper> 
                    </Col>
                  </Row>  
                  }  

                  {((item.contacts !== undefined && item.contacts.phoneNumbers.length !== 0) ||
                    (item.contacts !== undefined && item.contacts.emailAddresses.length !== 0) ||
                    (item.addresses !== undefined && item.addresses[0].length !== 0) ||
                    (item.directionsoverview !== undefined && item.directionsoverview !== '') ||
                    (item.weatheroverview !== undefined && item.weatheroverview !== '')) &&
                
                  <Row className="section">
                    {((item.contacts !== undefined && item.contacts.phoneNumbers.length !== 0) ||
                    (item.contacts !== undefined && item.contacts.emailAddresses.length !== 0) ||
                    (item.addresses !== undefined && item.addresses[0].length !== 0)) &&
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <h4>Contact Information</h4>
                      <Row>
                      {(item.contacts !== undefined && item.contacts.phoneNumbers.length !== 0) &&
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
                        <Col xs={12} key={`${index}${item.emailAddress}`}>
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
                        <Col xs={6} md={12} lg={6} key={`${index}${item.line1}`}>
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
                    <Col xs={12} md={8}>
                    { item.directionsoverview !== undefined && item.directionsoverview !=='' && 
                      <>
                        <h4>Directions</h4>
                        <p>{item.directionsoverview}</p>
                      </>
                    }
                    { item.weatheroverview !== undefined && item.weatheroverview != '' && 
                    <>
                      <span>
                        <h4>Weather</h4>
                        <div className='p' dangerouslySetInnerHTML={{__html: item.weatheroverview.replace(/\n/gi, '<br />')}}></div>
                      </span>
                    </>
                    }
                    </Col>
                  </Row>
                  }  

                 
                  
                  {((item.campsites !== undefined && item.campsites.length !== 0 && item.campsites.totalsites > 0) ||
                    ((item.amenities !== undefined && item.amenities.length !== 0) &&
                     (item.amenities.trashrecyclingcollection > 0 ||
                      item.amenities.internetconnectivity > 0 ||
                      item.amenities.cellphonereception > 0 ||
                      item.amenities.amphitheater > 0 ||
                      item.amenities.campstore > 0 ||
                      item.amenities.dumpstation > 0 ||
                      item.amenities.stafforvolunteerhostonsite > 0 ||
                      item.amenities.iceavailableforsale > 0 ||
                      item.amenities.foodstoragelockers > 0 ||
                      item.amenities.firewoodforsale > 0 ||
                      item.amenities.potablewater > 0 ||
                      item.amenities.showers > 0 ||
                      item.amenities.toilets > 0 ))
                     ) &&
                
                  <Row className="section">
                    <Col xs={12} md={4} className="camping columns">
                    { ((item.campsites !== undefined && item.campsites !== '') && 
                      (item.campsites.totalsites > 0)) &&
                      <>
                        <h4>Campsites</h4>
                        <ul>
                          <li><strong>Total Sites: </strong>{ item.campsites.totalsites }</li>
                        { item.campsites.tentonly > 0 &&
                          <li><strong>Tent Only: </strong> { item.campsites.tentonly }</li>
                        }
                        { item.campsites.group > 0 &&
                          <li><strong>Group: </strong> { item.campsites.group }</li>
                        }
                        { item.campsites.walkboatto > 0 &&
                          <li><strong>Walk/Boat To: </strong> { item.campsites.walkboatto }</li>
                        }
                        { item.campsites.horse > 0 &&
                          <li><strong>Horse: </strong> { item.campsites.horse }</li>
                        }
                        { item.campsites.other > 0 &&
                          <li><strong>Other: </strong> { item.campsites.other }</li>
                        }
                        { item.campsites.rvonly > 0 &&
                          <li><strong>RV Only: </strong> { item.campsites.rvonly }</li>
                        }
                        { item.campsites.electricalhookups > 0 &&
                          <li><strong>Electrical Hookup: </strong> { item.campsites.electricalhookups }</li>
                        }
                        </ul>
                      </>
                      }

                    </Col>
                    <Col xs={12} md={8}>
                    { (item.fees !== undefined && item.fees.length !== 0) &&
                      <Row>
                        <Col xs={12}>
                          <EntryFees title='Overnight Camping Fees' fees={item.fees} />
                        </Col>
                      </Row>
                      }
                    </Col>
                  </Row>
                  }

                 

                  { ((item.amenities.trashrecyclingcollection !== undefined && item.amenities.trashrecyclingcollection != 0) || 
                      (item.amenities.internetconnectivity !== undefined && item.amenities.internetconnectivity != 0) || 
                      (item.amenities.cellphonereception !== undefined && item.amenities.cellphonereception != 0) || 
                      (item.amenities.amphitheater !== undefined && item.amenities.amphitheater != 0) || 
                      (item.amenities.campstore !== undefined && item.amenities.campstore != 0) || 
                      (item.amenities.dumpstation !== undefined && item.amenities.dumpstation != 0) || 
                      (item.amenities.stafforvolunteerhostonsite !== undefined && item.amenities.stafforvolunteerhostonsite != 0) || 
                      (item.amenities.iceavailableforsale !== undefined && item.amenities.iceavailableforsale != 0) || 
                      (item.amenities.foodstoragelockers !== undefined && item.amenities.foodstoragelockers != 0) || 
                      (item.amenities.firewoodforsale !== undefined && item.amenities.firewoodforsale != 0) || 
                      (item.amenities.potablewater !== undefined && item.amenities.potablewater != 0) || 
                      (item.amenities.showers !== undefined && item.amenities.showers != 0) || 
                      (item.amenities.toilets !== undefined && item.amenities.toilets != 0)) && 
                        
                  <Row className="section">
                    <Col xs={12} className="accessibility columns">
                    <>
                        <h4>Amenities</h4>
                        <ul>
                          {item.amenities.trashrecyclingcollection !== undefined && item.amenities.trashrecyclingcollection != 0 && 
                            <li><strong>Trash/Recycling:</strong> {item.amenities.trashrecyclingcollection}</li>
                          }
                          {item.amenities.internetconnectivity !== undefined && item.amenities.internetconnectivity != 0 && 
                            <li><strong>Internet Connectivity:</strong> {item.amenities.internetconnectivity}</li>
                          }
                          {item.amenities.cellphonereception !== undefined && item.amenities.cellphonereception != 0 && 
                            <li><strong>Cell Phone Reception:</strong> {item.amenities.cellphonereception}</li>
                          }
                          {item.amenities.amphitheater !== undefined && item.amenities.amphitheater != 0 && 
                            <li><strong>Amphitheater:</strong> {item.amenities.amphitheater}</li>
                          }
                          {item.amenities.campstore !== undefined && item.amenities.campstore != 0 && 
                            <li><strong>Camp Store:</strong> {item.amenities.campstore}</li>
                          }
                          {item.amenities.dumpstation !== undefined && item.amenities.dumpstation != 0 && 
                            <li><strong>Dump Station:</strong> {item.amenities.dumpstation}</li>
                          }
                          {item.amenities.stafforvolunteerhostonsite !== undefined && item.amenities.stafforvolunteerhostonsite != 0 && 
                            <li><strong>Staff or Volunteer Host on Site:</strong> {item.amenities.stafforvolunteerhostonsite}</li>
                          }
                          {item.amenities.iceavailableforsale !== undefined && item.amenities.iceavailableforsale != 0 && 
                            <li><strong>Ice Available For Sale:</strong> {item.amenities.iceavailableforsale}</li>
                          }
                          {item.amenities.foodstoragelockers !== undefined && item.amenities.foodstoragelockers != 0 && 
                            <li><strong>Food Storage Lockers:</strong> {item.amenities.foodstoragelockers}</li>
                          }
                          {item.amenities.firewoodforsale !== undefined && item.amenities.firewoodforsale != 0 && 
                            <li><strong>Firewood For Sale:</strong> {item.amenities.firewoodforsale}</li>
                          }
                          {item.amenities.potablewater !== undefined && item.amenities.potablewater != 0 && 
                            <li><strong>Potable Water:</strong> {item.amenities.potablewater}</li>
                          }
                          {item.amenities.showers !== undefined && item.amenities.showers != 0 && 
                            <li><strong>Showers:</strong> {item.amenities.showers}</li>
                          }
                          {item.amenities.toilets !== undefined && item.amenities.toilets != 0 && 
                            <li><strong>Toilets:</strong> {item.amenities.toilets}</li>
                          }
                        </ul>
                      </>
                    </Col>
                  </Row>
                  }

                  
                  { ((item.accessibility.accessroads !== undefined && item.accessibility.accessroads != '') ||  
                      (item.accessibility.classifications !== undefined && item.accessibility.classifications != '') || 
                      (item.accessibility.adainfo !== undefined && item.accessibility.adainfo != '') ||  
                      (item.accessibility.additionalinfo !== undefined && item.accessibility.additionalinfo != '') ||  
                      (item.accessibility.cellphoneinfo !== undefined && item.accessibility.cellphoneinfo != '') ||  
                      (item.accessibility.firestovepolicy !== undefined && item.accessibility.firestovepolicy != '') ||  
                      (item.accessibility.internetinfo !== undefined && item.accessibility.internetinfo != '') ||  
                      (item.accessibility.rvallowed !== undefined && item.accessibility.rvallowed != '0') ||  
                      (item.accessibility.rvmaxlength !== undefined && item.accessibility.rvmaxlength != '0') ||  
                      (item.accessibility.trailerallowed !== undefined && item.accessibility.trailerallowed != '0') ||  
                      (item.accessibility.trailermaxlength !== undefined && item.accessibility.trailermaxlength != '0') ||  
                      (item.accessibility.wheelchairaccess !== undefined && item.accessibility.wheelchairaccess != '')) && 
                  
                  <Row className="section">
                    <Col xs={12} className="accessibility columns">
                      <>
                        <h4>Accessibility</h4>
                        <ul>
                          {item.accessibility.accessroads !== undefined && item.accessibility.accessroads != '' && 
                            <li><strong>Access Roads:</strong> {item.accessibility.accessroads}</li>
                          }
                          {item.accessibility.classifications !== undefined && item.accessibility.classifications != '' && 
                            <li><strong>Classifications:</strong> {item.accessibility.classifications}</li>
                          }
                          {item.accessibility.adainfo !== undefined && item.accessibility.adainfo != '' && 
                            <li><strong>ADA Info:</strong> {item.accessibility.adainfo}</li>
                          }
                          {item.accessibility.additionalinfo !== undefined && item.accessibility.additionalinfo != '' && 
                            <li><strong>Additional Info:</strong> {item.accessibility.additionalinfo}</li>
                          }
                          {item.accessibility.cellphoneinfo !== undefined && item.accessibility.cellphoneinfo != '' && 
                            <li><strong>Cellphone Info:</strong> {item.accessibility.cellphoneinfo}</li>
                          }
                          {item.accessibility.firestovepolicy !== undefined && item.accessibility.firestovepolicy != '' && 
                            <li><strong>Fire/Stove Policy:</strong> {item.accessibility.firestovepolicy}</li>
                          }
                          {item.accessibility.internetinfo !== undefined && item.accessibility.internetinfo != '' && 
                            <li><strong>Internet Info:</strong> {item.accessibility.internetinfo}</li>
                          }
                          {item.accessibility.rvallowed !== undefined && item.accessibility.rvallowed != '0' && 
                            <li><strong>RV Allowed:</strong> {item.accessibility.rvallowed}</li>
                          }
                          {item.accessibility.rvmaxlength !== undefined && item.accessibility.rvmaxlength != '0' && 
                            <li><strong>RV Maxlength:</strong> {item.accessibility.rvmaxlength}</li>
                          }
                          {item.accessibility.trailerallowed !== undefined && item.accessibility.trailerallowed != '0' && 
                            <li><strong>Trailer Allowed:</strong> {item.accessibility.trailerallowed}</li>
                          }
                          {item.accessibility.trailermaxlength !== undefined && item.accessibility.trailermaxlength != '0' && 
                            <li><strong>Trailer Max Length:</strong> {item.accessibility.trailermaxlength}</li>
                          }
                          {item.accessibility.wheelchairaccess !== undefined && item.accessibility.wheelchairaccess != '' && 
                            <li><strong>Wheelchair Access:</strong> {item.accessibility.wheelchairaccess}</li>
                          }
                        </ul>
                      </>
                    </Col>
                  </Row>
                  }
                    
                  {item.regulationsoverview !== undefined && item.regulationsoverview != '' && 
                  <Row>
                    <Col xs={12}>
                      <div className='boxes'>
                        <h4>Regulations</h4>
                        <div className='p' dangerouslySetInnerHTML={{__html: item.regulationsoverview.replace(/\n/gi, '<br />')}}></div>
                        <p><a href={item.regulationsurl} target='_blank' style={{ wordBreak: 'break-all'}} rel="noreferrer">{item.regulationsurl}</a></p>
                      </div>
                    </Col>
                  </Row>
                  }

                  {item.reservationsdescription !== undefined && item.reservationsdescription != '' && 
                  <Row>
                    <Col xs={12}>
                      <div className='boxes'>   
                      {item.reservationsdescription !== undefined && item.reservationsdescription != '' && 
                        <span>
                          <h4>Reservations</h4>
                          <div dangerouslySetInnerHTML={{__html: item.reservationsdescription.replace(/\n/gi, '<br />')}}></div>
                        </span>
                      }
                      {item.reservationssitesfirstcome !== undefined && item.reservationssitesfirstcome != '' && 
                        <span>
                          <h4>Reservations Sites First Come</h4>
                          <p>{item.reservationssitesfirstcome}</p>
                        </span>
                      }
                      {item.reservationssitesreservable !== undefined && item.reservationssitesreservable != '' && 
                        <span>
                          <h4>Reservations Reservable</h4>
                          <p>{item.reservationssitesreservable}</p>
                        </span>
                      }
                      {item.reservationsurl !== undefined && item.reservationsurl != '' && 
                        <span>
                          <h4>Reservations URL</h4>
                          <p><a href={item.reservationsurl} target='_blank' rel="noreferrer">{item.reservationsurl}</a></p>
                        </span>
                      }
                      </div>
                    </Col>
                  </Row>
                  }
                </AccordionItemPanel>
              </AccordionItem>
              </LazyLoad>
                )}
              )
            }
            </Col>
          </Row> 
        </Accordion>
      </Grid>
    </Campgrounds>
  )
}
  
export default Component

const Campgrounds = styled.div`
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 22rem;
    ${SuperQuery().minWidth.md.css`
      height: 30rem;
    `}
  }
  
  ul {
    column-count: 1;
    list-style-type: none;
    padding: .25rem 0 .25rem 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    padding: .3125rem 0;
    overflow-wrap: break-word;
  }
  .amenities {
    font-size: 1rem;
    &.columns {
      ul {
        column-count: 2;

        ${SuperQuery().maxWidth.of('325px').css`
          column-count: 1;
        `}
        ${SuperQuery().minWidth.md.css`
          column-count: 2;
        `}
      }
    }
  }
  .accessibility {
    font-size: 1rem;
    &.columns {
      ul {
        column-count: 2;

        ${SuperQuery().maxWidth.of('325px').css`
          column-count: 1;
        `}
        ${SuperQuery().minWidth.md.css`
          column-count: 3;
        `}
      }
    }
  }
  .camping {
    font-size: 1rem;
    &.columns {
      ul {
        column-count: 2;
        ${SuperQuery().maxWidth.of('325px').css`
          column-count: 1;
        `}
        ${SuperQuery().minWidth.md.css`
          column-count: 1;
        `}
      }
    }
  }
  
  .boxes {
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.box_background};
    padding: 3rem 0.875rem 1rem 0.875rem;
    margin: 1rem -0.875rem 0.5rem -0.875rem;
    column-count: 1;
    ${SuperQuery().minWidth.md.css`
      padding: 3rem 0.75rem 1rem 0.75rem;
      margin: 1rem -.875rem 0.5rem -.875rem;
      column-count: 3;
    `}
    h4 {
      margin-top: -2rem;
    }
  }
`
const MapLive__Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 24rem;
  max-width: 100%;
  z-index: 10;
  margin: 0 0 1rem 0;
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  margin: 1rem 0 0 0;
  padding: 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;

  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
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
