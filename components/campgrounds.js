import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Campgrounds = props => {
  const [campgrounds, setCampgrounds] = useState(props.campgrounds)
  return (
    <Grid>
      <Row>
      <Col>
        { campgrounds !== undefined && campgrounds.length != 0 &&
        <h2>Campgrounds</h2>
        }
        </Col>
      </Row>
      <Row>
        { campgrounds.slice(0).map((item) => {
          return(
            <Col xs={12} sm={6} md={3} key={item.id}>
             
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Col>
          )
        })
      }
      </Row>
    </Grid>
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
