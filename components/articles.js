import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Articles = props => {
  const [articles, setArticles] = useState(props.articles)
  return (
    <Container>
      <Grid>
        <Row>
          { articles.slice(0,8).map((item) => {
            return(
              <Col xs={12} sm={6} md={3} key={item.id}>
                <Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "/US-National-Parks-logo-sml-bw.png" : item.listingimage.url  } alt={item.listingimage.altText} />
                <h4>{item.title}</h4>
                <p>{item.listingdescription}</p>
                <a href={item.url} target="_blank">Read more...</a>
              </Col>
            )
          })
          }
        </Row>
      </Grid>
    </Container>
  )
}
  
export default Articles

const Container = styled(Grid)`
display: flex;
flex-wrap: wrap;
padding: 10px 0;

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
const Group = styled.div`
  padding: 10px;
`
const Item = styled.div`
  flex: 1 1 300px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10px 0px;
`
const Image = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 16vw;
  min-height: 200px;
  margin: 0;
`
