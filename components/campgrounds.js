import React from 'react'
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

const Component = ({ campgrounds }) => {
  return (
    <Campgrounds>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <Row__Decorated>
            <Col xs={12}>
              <h2>Campgrounds</h2>
            </Col>
          </Row__Decorated>
          <Row__Decorated>
            <Col xs={12}>
          { campgrounds.slice(0).map((item) => {
            return(
                  <AccordionItem key={item.id} onClick={()=>setTimeout(forceCheck, 10)}>
                    <AccordionItemHeading onMouseDown={()=>setTimeout(forceCheck, 200)}>
                      <AccordionItemButton>
                        <h3>{item.name}</h3>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    { item.images !== undefined &&  
                    <Row__Decorated>
                      <Col xs={12}>
                        <LazyLoad offset={0}>
                          <Image backgroundURL={`${item.images[0].url}` } className="lazyload__image--height" />
                        </LazyLoad>
                      </Col>
                    </Row__Decorated>
                    }

                      <Row__Decorated>
                        <Col xs={12}>
                          <p className="section introduction description">{item.description}</p>
                        </Col>
                      </Row__Decorated>
                      { ((item.directionsoverview !== undefined && item.directionsoverview !=="") ||
                        (item.directionsoverview !== undefined && item.directionsoverview !=="") ||
                        (item.latLong !== undefined && item.latLong !=="")) && 
                      <Row__Decorated className="section">
                        <Col xs={12} sm={6}>
                            <>
                            { item.directionsoverview !== undefined && item.directionsoverview !=="" && 
                              <>
                                <h4>Directions</h4>
                                <p>{item.directionsoverview}<br />
                                  <a href={item.directionsUrl} target="_blank">Click for Directions</a>
                                </p>
                              </>
                            }
                            { ((item.campsites !== undefined && item.campsites !== "") && 
                              (item.campsites.totalsites > 0)) &&
                              <>
                                <h4>Campsites</h4>
                                <p><strong>Total Sites: </strong>{ item.campsites.totalsites }</p>
                                <ul>
                                  <li><strong>Tent Only: </strong> { item.campsites.tentonly }</li>
                                  <li><strong>Group: </strong> { item.campsites.group }</li>
                                  <li><strong>Walk/Boat To: </strong> { item.campsites.walkboatto }</li>
                                  <li><strong>Horse: </strong> { item.campsites.horse }</li>
                                  <li><strong>Other: </strong> { item.campsites.other }</li>
                                  <li><strong>RV Only: </strong> { item.campsites.rvonly }</li>
                                  <li><strong>Electrical Hookup: </strong> { item.campsites.electricalhookups }</li>
                                </ul>
                              </>
                            }
                            </>
                        </Col>
                        <Col xs={12} sm={6}>
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
                      </Row__Decorated>
                      }
                      { ((item.accessibility.accessroads !== undefined && item.accessibility.accessroads != "") ||  
                        (item.accessibility.classifications !== undefined && item.accessibility.classifications != "") || 
                        (item.accessibility.adainfo !== undefined && item.accessibility.adainfo != "") ||  
                        (item.accessibility.additionalinfo !== undefined && item.accessibility.additionalinfo != "") ||  
                        (item.accessibility.cellphoneinfo !== undefined && item.accessibility.cellphoneinfo != "") ||  
                        (item.accessibility.firestovepolicy !== undefined && item.accessibility.firestovepolicy != "") ||  
                        (item.accessibility.internetinfo !== undefined && item.accessibility.internetinfo != "") ||  
                        (item.accessibility.rvallowed !== undefined && item.accessibility.rvallowed != "0") ||  
                        (item.accessibility.rvmaxlength !== undefined && item.accessibility.rvmaxlength != "0") ||  
                        (item.accessibility.trailerallowed !== undefined && item.accessibility.trailerallowed != "0") ||  
                        (item.accessibility.trailermaxlength !== undefined && item.accessibility.trailermaxlength != "0") ||  
                        (item.accessibility.wheelchairaccess !== undefined && item.accessibility.wheelchairaccess != "")) && 
                      <Row__Decorated className="section">
                        <Col xs={12}>
                          <h4>Accessibility</h4>
                          <ul>
                            {item.accessibility.accessroads !== undefined && item.accessibility.accessroads != "" && 
                              <li><strong>Access Roads:</strong> {item.accessibility.accessroads}</li>
                            }
                            {item.accessibility.classifications !== undefined && item.accessibility.classifications != "" && 
                              <li><strong>Classifications:</strong> {item.accessibility.classifications}</li>
                            }
                            {item.accessibility.adainfo !== undefined && item.accessibility.adainfo != "" && 
                              <li><strong>ADA Info:</strong> {item.accessibility.adainfo}</li>
                            }
                            {item.accessibility.additionalinfo !== undefined && item.accessibility.additionalinfo != "" && 
                              <li><strong>Additional Info:</strong> {item.accessibility.additionalinfo}</li>
                            }
                            {item.accessibility.cellphoneinfo !== undefined && item.accessibility.cellphoneinfo != "" && 
                              <li><strong>Cellphone Info:</strong> {item.accessibility.cellphoneinfo}</li>
                            }
                            {item.accessibility.firestovepolicy !== undefined && item.accessibility.firestovepolicy != "" && 
                              <li><strong>Fire/Stove Policy:</strong> {item.accessibility.firestovepolicy}</li>
                            }
                            {item.accessibility.internetinfo !== undefined && item.accessibility.internetinfo != "" && 
                              <li><strong>Internet Info:</strong> {item.accessibility.internetinfo}</li>
                            }
                            {item.accessibility.rvallowed !== undefined && item.accessibility.rvallowed != "0" && 
                              <li><strong>RV Allowed:</strong> {item.accessibility.rvallowed}</li>
                            }
                            {item.accessibility.rvmaxlength !== undefined && item.accessibility.rvmaxlength != "0" && 
                              <li><strong>RV Maxlength:</strong> {item.accessibility.rvmaxlength}</li>
                            }
                            {item.accessibility.trailerallowed !== undefined && item.accessibility.trailerallowed != "0" && 
                              <li><strong>Trailer Allowed:</strong> {item.accessibility.trailerallowed}</li>
                            }
                            {item.accessibility.trailermaxlength !== undefined && item.accessibility.trailermaxlength != "0" && 
                              <li><strong>Trailer Max Length:</strong> {item.accessibility.trailermaxlength}</li>
                            }
                            {item.accessibility.wheelchairaccess !== undefined && item.accessibility.wheelchairaccess != "" && 
                              <li><strong>Wheelchair Access:</strong> {item.accessibility.wheelchairaccess}</li>
                            }
                          </ul>
                        </Col>
                      </Row__Decorated>
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
                      <Row__Decorated className="section">
                        <Col xs={12}  className="amenities">
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
                        </Col>
                      </Row__Decorated>
                      }
                      {item.regulationsoverview !== undefined && item.regulationsoverview != "" && 
                      <Row__Decorated>
                        <Col xs={12}>
                          <div className="boxes">
                            <span>
                              <h4>Regulations</h4>
                              <div dangerouslySetInnerHTML={{__html: item.regulationsoverview.replace(/\n/gi, "<br />")}}></div>
                              <p><a href={item.regulationsurl} target="_blank" style={{ wordBreak: "break-all"}}>{item.regulationsurl}</a></p>
                            </span>
                          </div>
                        </Col>
                      </Row__Decorated>
                      }

                             
                    {item.reservationsdescription !== undefined && item.reservationsdescription != "" && 
                      <Row__Decorated>
                        <Col xs={12}>
                          <div className="boxes">   
                          {item.reservationsdescription !== undefined && item.reservationsdescription != "" && 
                            <span>
                              <h4>Reservations</h4>
                              <div dangerouslySetInnerHTML={{__html: item.reservationsdescription.replace(/\n/gi, "<br />")}}></div>
                            </span>
                          }
                          {item.reservationssitesfirstcome !== undefined && item.reservationssitesfirstcome != "" && 
                            <span>
                              <h4>Reservations Sites First Come</h4>
                              <p>{item.reservationssitesfirstcome}</p>
                            </span>
                          }
                          {item.reservationssitesreservable !== undefined && item.reservationssitesreservable != "" && 
                            <span>
                              <h4>Reservations Reservable</h4>
                              <p>{item.reservationssitesreservable}</p>
                            </span>
                          }
                          {item.reservationsurl !== undefined && item.reservationsurl != "" && 
                            <span>
                              <h4>Reservations URL</h4>
                              <p><a href={item.reservationsurl} target="_blank">{item.reservationsurl}</a></p>
                            </span>
                          }
                      </div>
                      </Col>
                    </Row__Decorated>
                    }
                             
                    {item.weatheroverview !== undefined && item.weatheroverview != "" && 
                      <Row__Decorated className="boxes">
                        <Col xs={12}>
                          <div>                   
                            <span>
                              <h4>Weather Overview</h4>
                              <div dangerouslySetInnerHTML={{__html: item.weatheroverview.replace(/\n/gi, "<br />")}}></div>
                            </span>
                          </div>
                        </Col>
                      </Row__Decorated>
                    }
                    </AccordionItemPanel>
                  </AccordionItem>
              
            )}
          )
        }
            </Col>
          </Row__Decorated> 
        </Accordion>
    </Campgrounds>
  )
}
  
export default Component

const Campgrounds = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 22em;
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
    overflow-wrap: break-word;
  }
  p.introduction {
    font-size: 1.5em;
    font-weight: 400;
    letter-spacing: -1px;
  }
  .section {
    font-size: 1.25em;
    margin: 1em .25em 1em .25em;
    border-top: 4px solid #333333;
    &:first-of-type {
      border:none;
      margin-bottom: 0;
    }
  }
  .amenities {
    ul {
    ${SuperQuery().minWidth.md.css`
      column-count: 2;
    `}
    }
  }
  .boxes {
    font-size:1em;
    background-color: ${({ theme }) => theme.colors.box_background};
    padding: 3.5em 1.5em 1em 1.5em;
    margin: .5em .25em .5em .25em;
    column-count: 1;
    h4 {

      font-size:1.5em;
      margin: -2em 0 0 0;
    }
    p {
      margin: 0;
      padding:0;
    }
    ${SuperQuery().minWidth.md.css`
      margin: .5em .25em .5em .25em;
      column-count: 2;
    `}
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
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 22em;
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;

  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
