import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad, { forceCheck } from 'react-lazyload'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Component = ({ events }) => {
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return nd.toLocaleDateString()
  }
  return (
    <Events>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
          <Col xs={12}>
            <h2>Events</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          { events.slice(0,10).map((item) => {
            return (
              <AccordionItem key={item.id} onClick={()=>setTimeout(forceCheck, 10)}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h3>{item.title}</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  { item.images.length !== 0 && item.images[0].url !== undefined && 
                  <Row>
                    <Col xs={12}>
                      <LazyLoad offset={0} className="lazyload__image--height">
                        <Image backgroundURL={`https://www.nps.gov${item.images[0].url}` } className="lazyload__image--height" />
                      </LazyLoad>
                    </Col>
                  </Row>
                  }
                  <Row>
                    <Col xs={12} md={8}>
                    <div className="description">
                      <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                      </div>
                      </Col>
                    <Col xs={12} md={4}>
                    <div className="details">
                      { item.times[0] !== undefined && item.times.length[0] !== 0 &&
                        <p><strong>Time: </strong>{item.times[0].timestart}–{item.times[0].timeend}</p> 
                      }
                      <p><strong>Location: </strong>{item.location}</p>
                      <p><strong>Cost: </strong> 
                        { item.isfree === "false" 
                        ? item.feeinfo 
                        : item.feeinfo.length !== 0 && item.isfree === true 
                          ? "FREE (" + item.feeinfo + ")" 
                          : "FREE" 
                        }
                      </p> 
                      { item.regresinfo !== "" &&
                        <p><strong>Reservations: </strong>{item.regresinfo}
                        { item.regresurl !== "" &&
                          <strong> <a href={item.regresurl} target="_blank">Click here for reservations.</a></strong>
                        }
                      </p> 
                      }
                      <p><strong>Dates: </strong>{item.dates.map((date) => toDateFormat(date)).join(', ')}</p>

                      {item.infourl !== "" &&
                        <p><strong>More Info: </strong><a href={item.infourl} target="_blank">{item.infourl}</a></p> 
                      }
                      </div>
                    </Col>
                  </Row>
                </AccordionItemPanel>
              </AccordionItem>
              )
            })
          }
          </Col>
        </Row> 
      </Accordion>     
    </Events>
  )
}
  
export default Component

const Events = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 22em;
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  margin: 0;
  padding: 0;
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;
  
`