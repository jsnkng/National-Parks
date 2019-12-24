import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import MapLive__Component from './maplive'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
import { forceCheck } from 'react-lazyload'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Campgrounds = props => {
  const [campgrounds, setCampgrounds] = useState(props.campgrounds)
  return (
    <Grid__Container>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row__Container>
          <Col__Container xs={12}>
            <h3>Campgrounds</h3>
          </Col__Container>
        </Row__Container>
        { campgrounds.slice(0).map((item) => {
          return(
            <Row__Container key={item.id}>
              <Col__Container xs={12}>
                <AccordionItem>
                  <AccordionItemHeading onMouseDown={()=>setTimeout(forceCheck, 200)}>
                    <AccordionItemButton>
                      {item.name}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <CampgroundWrapper>
                    <Row__Container>
                      <Col__Container xs={12}>
                        {item.images !== undefined && item.images != 0 && 
                        <LazyLoad height={320} offset={600}>
                          <Image backgroundURL={item.images[0].url} />
                        </LazyLoad>
                        }
                        <p className="section introduction">{item.description}</p>
                      </Col__Container>
                    </Row__Container>
                    
                    <Row__Container className="section">
                      <Col__Container xs={12} sm={6}>
                          <>
                            { item.directionsoverview !== undefined && item.directionsoverview !== 0 && 
                              <>
                              <h5>Directions</h5>
                              <p>{item.directionsoverview}<br />
                                <a href={item.directionsUrl} target="_blank">{item.directionsUrl}</a>
                              </p>
                          </>
                            }
                            { item.campsites !== undefined && item.campsites !== 0 && 
                              <>
                              <h5>Campsites</h5>
                              <ul> 
                                { Object.entries(item.campsites).map((item) => item[1] !== '0' ? <li key={item[0]}><strong>{item[0]}:</strong> {item[1]} </li> : '') }
                              </ul>
                          </>
                            }
                          </>
                        
                      </Col__Container>
                      <Col__Container xs={12} sm={6}>
                        <MapLive__Wrapper style={{ display : item.latLong != '' ? ' block' : ' none'}}>
                      <LazyLoad height={440} offset={600} key={item.id}>
                          <MapLive__Component
                            latLong={item.latLong}
                            name={item.name}
                            designation={item.description}
                            zoom={13}
                            markers={[{id: item.id, latLong: item.latLong, name: item.name, description: item.description}]}
                          />
                        </LazyLoad>
                        </MapLive__Wrapper> 
                      </Col__Container>
                    </Row__Container>
                    
                    <Row__Container className="section">
                      <Col__Container xs={12}>
                        <h5>Accessibility</h5>
                        <ul>
                          {item.accessibility.accessroads !== undefined && item.accessibility.accessroads != 0 && 
                            <li><strong>Access Roads:</strong> {item.accessibility.accessroads}</li>
                          }
                          {item.accessibility.classifications !== undefined && item.accessibility.classifications != 0 && 
                            <li><strong>Classifications:</strong> {item.accessibility.classifications}</li>
                          }
                          {item.accessibility.adainfo !== undefined && item.accessibility.adainfo != 0 && 
                            <li><strong>ADA Info:</strong> {item.accessibility.adainfo}</li>
                          }
                          {item.accessibility.additionalinfo !== undefined && item.accessibility.additionalinfo != 0 && 
                            <li><strong>Additional Info:</strong> {item.accessibility.additionalinfo}</li>
                          }
                          {item.accessibility.cellphoneinfo !== undefined && item.accessibility.cellphoneinfo != 0 && 
                            <li><strong>Cellphone Info:</strong> {item.accessibility.cellphoneinfo}</li>
                          }
                          {item.accessibility.firestovepolicy !== undefined && item.accessibility.firestovepolicy != 0 && 
                            <li><strong>Fire/Stove Policy:</strong> {item.accessibility.firestovepolicy}</li>
                          }
                          {item.accessibility.internetinfo !== undefined && item.accessibility.internetinfo != 0 && 
                            <li><strong>Internet Info:</strong> {item.accessibility.internetinfo}</li>
                          }
                          {item.accessibility.rvallowed !== undefined && item.accessibility.rvallowed != 0 && 
                            <li><strong>RV Allowed:</strong> {item.accessibility.rvallowed}</li>
                          }
                          {item.accessibility.rvmaxlength !== undefined && item.accessibility.rvmaxlength != 0 && 
                            <li><strong>RV Maxlength:</strong> {item.accessibility.rvmaxlength}</li>
                          }
                          {item.accessibility.trailerallowed !== undefined && item.accessibility.trailerallowed != 0 && 
                            <li><strong>Trailer Allowed:</strong> {item.accessibility.trailerallowed}</li>
                          }
                          {item.accessibility.trailermaxlength !== undefined && item.accessibility.trailermaxlength != 0 && 
                            <li><strong>Trailer Max Length:</strong> {item.accessibility.trailermaxlength}</li>
                          }
                          {item.accessibility.wheelchairaccess !== undefined && item.accessibility.wheelchairaccess != 0 && 
                            <li><strong>Wheelchair Access:</strong> {item.accessibility.wheelchairaccess}</li>
                          }
                        </ul>
                      </Col__Container>
                    </Row__Container>
                    
                    <Row__Container className="section">
                      <Col__Container xs={12}  className="amenities">
                        <h5>Amenities</h5>
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
                      </Col__Container>
                    </Row__Container>
                    
                    <Row__Container className="section">
                      <Col__Container xs={12} className="details">
                        {item.regulationsoverview !== undefined && item.regulationsoverview != 0 && 
                          <span>
                            <h5>Regulations</h5>
                            <p>{item.regulationsoverview}</p>
                            <p><a href={item.regulationsurl} target="_blank">{item.regulationsurl}</a></p>
                          </span>
                        }
                        {item.reservationsdescription !== undefined && item.reservationsdescription != 0 && 
                          <span>
                            <h5>Reservations</h5>
                            <p>{item.reservationsdescription}</p>
                          </span>
                        }
                        {item.reservationssitesfirstcome !== undefined && item.reservationssitesfirstcome != 0 && 
                          <span>
                            <h5>Reservations Sites First Come</h5>
                            <p>{item.reservationssitesfirstcome}</p>
                          </span>
                        }
                        {item.reservationssitesreservable !== undefined && item.reservationssitesreservable != 0 && 
                          <span>
                            <h5>Reservations Reservable</h5>
                            <p>{item.reservationssitesreservable}</p>
                          </span>
                        }
                        {item.reservationsurl !== undefined && item.reservationsurl != 0 && 
                          <span>
                            <h5>Reservations URL</h5>
                            <p><a href={item.reservationsurl} target="_blank">{item.reservationsurl}</a></p>
                          </span>
                        }
                        {item.weatheroverview !== undefined && item.weatheroverview != 0 && 
                          <span>
                            <h5>Weather Overview</h5>
                            <p>{item.weatheroverview}</p>
                          </span>
                        }
                        </Col__Container>
                      </Row__Container>
                  </CampgroundWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              </Col__Container>
            </Row__Container> 
          )}
        )
      }
      </Accordion>
    </Grid__Container>
  )
}
  
export default Campgrounds

const Grid__Container = styled(Grid)`
  padding: 0 .5em;
  vertical-align: text-top;
  h3 {
    overflow-wrap: break-word;
    font-size: 2em;
    line-height: 1;
    margin: .05em;
    padding: .425em .575em .425em .25em;
    border: 0;
    border-bottom: 2px solid #ffffff;
    ${SuperQuery().minWidth.md.css`
      border-bottom: 4px solid #ffffff;
      padding: .425em .25em .425em 0;
    `}
  }
  p {
    padding: 1em 0;
    margin: 0 .25em 0 .5em;
    ${SuperQuery().minWidth.lg.css`
      width: 85%;
    `}
    &:last-child {
      padding: 0 0 2em 0;
    }
  }
  h5 {
    font-size: 1.125em;
    margin:0;
    padding: 0;
  }
  p {
    font-size: 1em;
    padding: 0 0 1em 0;
    margin: 0;
    word-wrap:break-word;
  }
  p.introduction {
    font-size: 1.125em;
    line-height: 1.625;
    margin: .75em 1em;
  }
  ul {
    font-size: 1em;
    column-count: 1;
    list-style-type: none;
    padding: .25em 0 .25em 0;
    margin: 0;
    ${SuperQuery().minWidth.sm.css`
    column-count: 2;
    `}
  }
  li {
    font-size: .9em;
    list-style-type: none;
    padding: .3125em 0;
    font-weight: 300;
  }
  .section {
    padding: .75em 0;
    margin: 0 .625em;
    border-bottom: 4px solid #333333;
  }
  .section:last-child {
    border: none;
  }
`
const Row__Container = styled(Row)`
  padding: 0;
`
const Col__Container = styled(Col)`
  padding: 0;
  &.amenities {
    ul {
      column-count: 2;
      ${SuperQuery().minWidth.sm.css`
        column-count: 4;
      `}
    }
  }
`
const MapLive__Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 22em;
  max-width: 100%;
  z-index: 10;
  ${SuperQuery().minWidth.md.css`
    margin: 1em 0 0 0;
  `}
`
const CampgroundWrapper = styled.div`
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 15em;
  margin: .75em 1em;
  
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`
