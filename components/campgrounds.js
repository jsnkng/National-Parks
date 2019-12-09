import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

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
          { campgrounds.slice(0).map((item) => {
            return(
              <CampgroundsCol xs={12} sm={6} md={3} key={item.id}>
              
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </CampgroundsCol>
            )
          })
        }
        </CampgroundsRow>
      </CampgroundsGrid>
    </CampgroundsWrapper>
  )
  
}
  
export default Campgrounds


const ResponsiveImage = styled.div`
  position: relative;
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
  }
  p {
   font-size: .9em;
  }
`
const CampgroundsGrid = styled(Grid)`
  
`
const CampgroundsRow = styled(Row)`
`

const CampgroundsCol = styled(Col)`
flex: 1 1 300px;
align-items: stretch;
padding: 10px;
`
