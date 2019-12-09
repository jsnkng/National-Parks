import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import MapContainer from './googlemap'
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
    <CampgroundsWrapper>
      <CampgroundsGrid>
        <CampgroundsRow>
          <CampgroundsCol>
          { campgrounds !== undefined && campgrounds.length != 0 &&
          <h3>Campgrounds</h3>
          }
          </CampgroundsCol>
        </CampgroundsRow>
        <CampgroundsRow>
          <CampgroundsCol>


      { campgrounds.slice(0).map((item) => {
            console.log(item)
        return(
          <Accordion key={item.id} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CampgroundsGrid>
                <CampgroundsRow>
                  <CampgroundsCol>
                  {item.images !== undefined && item.images != 0 && 
                      <CampgroundImagesWrapper> 
                        { item.images.map((item) => item[1] !== '0' ? <CampgroundImages key={item[0]} backgroundURL={item.url} /> : '') }
                      </CampgroundImagesWrapper>
                    }

                  </CampgroundsCol>
                </CampgroundsRow>
                  <CampgroundsRow>
                    <CampgroundsCol xs={12} sm={4} md={4}>
                    
                   
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

                </CampgroundsCol>

                <CampgroundsCol xs={12} sm={6} md={6}>

                <MapWrapper style={{ display : item.latLong != '' ? ' block' : ' none'}}>
                  <MapContainer
                    latLong={item.latLong}
                    name={item.name}
                    designation={item.description}
                    zoom={13}
                  />
                </MapWrapper>
                
                <h5>Campsites</h5>
                  {item.campsites !== undefined && item.campsites != 0 && 
                    <ul> 
                      { Object.entries(item.campsites).map((item) => item[1] !== '0' ? <li key={item[0]}><strong>{item[0]}:</strong> {item[1]} </li> : '') }
                    </ul>
                  }

                
                {item.directionsoverview !== undefined && item.directionsoverview != 0 && 
                  <span>
                    <h5>Directions</h5>
                    <p>{item.directionsoverview} – {item.directionsUrl}</p>
                  </span>
                }

                {item.regulationsoverview !== undefined && item.regulationsoverview != 0 && 
                  <span>
                    <h5>Regulations</h5>
                    <p>{item.regulationsoverview}</p>
                    {item.regulationsurl}
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
                    <h5>reservationssitesfirstcome</h5>
                    <p>{item.reservationssitesfirstcome}</p>
                  </span>
                }

                {item.reservationssitesreservable !== undefined && item.reservationssitesreservable != 0 && 
                  <span>
                    <h5>reservationssitesreservable</h5>
                    <p>{item.reservationssitesreservable}</p>
                  </span>
                }

                {item.reservationsurl !== undefined && item.reservationsurl != 0 && 
                  <span>
                    <h5>reservationsurl</h5>
                    <p>{item.reservationsurl}</p>
                  </span>
                }


                {item.weatheroverview !== undefined && item.weatheroverview != 0 && 
                  <span>
                    <h5>Weather Overview</h5>
                    <p>{item.weatheroverview}</p>
                  </span>
                }

                    </CampgroundsCol>
                  </CampgroundsRow>
                </CampgroundsGrid>
                </AccordionItemPanel>
            </AccordionItem>
                
            </Accordion>

            )
          })
        }

        </CampgroundsCol>
        </CampgroundsRow>
      </CampgroundsGrid>
    </CampgroundsWrapper>
  )
  
}
  
export default Campgrounds

const MapWrapper = styled.div`
  position:relative;
  width: 100%;
  height: 60vw !important;
  max-width: 100%;
  max-height: 400px !important;
  z-index: -10;
  padding:20px;
`
const CampgroundImagesWrapper = styled.div`
display: flex;
`
const CampgroundImages = styled.div`
flex: 1 1 300px;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  margin: 0;
`

const CampgroundsWrapper = styled.div`
  font-family: Helvetica;
  padding: 1em 0;

  h3 {
    background-color: #333333;
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
    display: inline;
  }
  h5 {
    display: inline;
    padding: 0 25px;
  }
  p {
    padding: 0 25px;
    font-size: .8em;
  }
  ul {
    font-size: .8em;
    list-style-type: none;
    padding-left: 20px;
  }
  li {
    list-style-type: none;
    padding: 0 4px;
  }
`
const CampgroundsGrid = styled(Grid)`
   word-wrap:break-word;
   padding: 0;
`
const CampgroundsRow = styled(Row)`
`

const CampgroundsCol = styled(Col)`
flex: 1 1 300px;
align-items: stretch;
padding: 10px;
`
