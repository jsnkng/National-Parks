import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Places = props => {
  const [places, setPlaces] = useState(props.places)
  return (
    <Grid>
    <Row>
    <Col>
      { places !== undefined && places.length != 0 &&
      <h2>Places</h2>
      }
      </Col>
    </Row>
    <Row>
      { places.slice(0).map((item) => {
        return(
          <Col xs={12} sm={6} md={3} key={item.id}>
            {item.listingimage.url !== undefined && item.listingimage.url != 0 &&
                <ResponsiveImage backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  } alt={item.listingimage.altText} />
            }
            <h3>{item.title}</h3>
            <p>{item.listingdescription}</p>
          </Col>
        )
      })
    }
    </Row>
  </Grid>
  )
}
  
export default Places

const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 16vw;
  min-height: 300px;
  margin: 0;
`