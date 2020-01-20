import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const SlideShow = ({ title, subtitle, images }) => {
  if(images.length > 0) {
    const first = images[0]
    const newImages = images.splice(0,1)
    images.push(first)
  }
  return (
    <Content>
      { (title !== '' || subtitle !== '') &&
      
      <div className='hero__header'>
        <Grid fluid>
          <Row>
            <Col xs={12} >
            <h2 dangerouslySetInnerHTML={{__html: title }}></h2>
          <h3>{subtitle}</h3>
            </Col>
          </Row>
        </Grid>
      </div>
      }
    <Carousel__Styled 
      useKeyboardArrows={true}
      showArrows={true} 
      showThumbs={false} 
      infiniteLoop={false} 
      emulateTouch={true} 
      showStatus={false}
      showIndicators={images.length > 1 ? true : false}
      swipeScrollTolerance={10}
      swipeable={true}>
      { images.slice(0).map((item, index) => {
        return(
          <Image key={`${item.id}`}
            backgroundURL={item.url}>
            <Grid fluid>
              <Row>
                <Col xs={12} >
                <span className="caption">{item.caption}</span>
                </Col>
              </Row>
            </Grid>
            
          </Image>
        )
        })
      }
    </Carousel__Styled>
    </Content>
  )
}

export default SlideShow


const Image = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  ${'' /* margin: 0.5rem 0 0 0; */}
  width: 100%;
  height: 100%;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;

  .caption {
    display: block;
    text-align: left;
    padding: 94vh 0 0 0; 
    color: #ffffff;
    font-size: .875rem;
    margin:  0;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.9);
  }

`

const Content = styled.div`
  height: 100%;

  .hero__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    height: 100%;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.image_overlay_light};
    color: ${({ theme }) => theme.colors.home_text};
    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.home_text_shadow};
    z-index: 1000;
   }

   h2 {
      max-width: 66vw;
      border: none;
      font-size: 2.25rem;
      line-height: 0.875;
      letter-spacing: -0.1rem;
      margin: 0;
      padding: 50vh 0 0.125rem 0; 

      ${SuperQuery().minWidth.sm.css`
        font-size: 8vw;
      `}
    }
    h3 {
      max-width: 66vw;
      font-weight: 200;
      font-size: 1.75rem;
      line-height: 0.875;
      margin: 0;
      padding: 0; 
      ${SuperQuery().minWidth.sm.css`
        font-size: 5vw;
      `}
    }
  } 



`
const Carousel__Styled = styled(Carousel)`
  height: 100%;

  .carousel.carousel-slider {
    height: 100%;
  }
  .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
    -webkit-transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -ms-transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    transition: all 0.25s ease-in;
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: absolute;
    z-index: 2;
    top: 20px;
    background: none;
    border: 0;
    font-size: 32px;
    cursor: pointer; 
  }
  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100); }
  .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
    margin: 0 5px;
    display: inline-block;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: ''; }
  .carousel .control-disabled.control-arrow {
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: inherit;
    display: none; }
  .carousel .control-prev.control-arrow {
    left: 0; 
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #fff; 
  }
  .carousel .control-next.control-arrow {
    right: 0; 
  }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #fff; 
  }
  .carousel {
    position: relative;
    width: 100%; 
  }
  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
  }
  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none; 
  }
  .carousel .carousel {
    position: relative; 
  }
  .carousel .control-arrow {
    outline: 0;
    border: 0;
    background: none;
    top: 50%;
    margin-top: -13px;
    font-size: 18px; 
  }
  .carousel .thumbs-wrapper {
    margin: 20px;
    overflow: hidden; 
  }
  .carousel .thumbs {
    -webkit-transition: all 0.15s ease-in;
    -moz-transition: all 0.15s ease-in;
    -ms-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    position: relative;
    list-style: none;
    white-space: nowrap; 
  }
  .carousel .thumb {
    -webkit-transition: border 0.15s ease-in;
    -moz-transition: border 0.15s ease-in;
    -ms-transition: border 0.15s ease-in;
    -o-transition: border 0.15s ease-in;
    transition: border 0.15s ease-in;
    display: inline-block;
    width: 80px;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    border: 3px solid #fff;
    padding: 2px; 
  }
  .carousel .thumb:focus {
    border: 3px solid #ccc;
    outline: none; 
  }
  .carousel .thumb.selected, .carousel .thumb:hover {
    border: 3px solid #333; 
  }
  .carousel .thumb img {
    vertical-align: top; 
  }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden; 
  }
  .carousel.carousel-slider .control-arrow {
    top: 0;
    color: #fff;
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 5px; 
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0, 0, 0, 0.2); 
  }
  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    height: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in; 
  }
  .carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex; 
    height: 100%;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column; 
  }
  .carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex; 
  }
  .carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column; 
  }
  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%; 
  }
  .carousel .slider.animated {
    height: 100%;
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out; 
  }
  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
  }
  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0; 
  }
  .carousel .slide iframe {
    display: inline-block;
    width: calc(100% - 80px);
    margin: 0 40px 40px;
    border: 0; 
  }
  .carousel .slide .legend {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -45%;
    width: 90%;
    border-radius: 10px;
    background: #000;
    color: #fff;
    padding: 10px;
    font-size: 12px;
    text-align: center;
    opacity: 0.25;
    -webkit-transition: opacity 0.35s ease-in-out;
    -moz-transition: opacity 0.35s ease-in-out;
    -ms-transition: opacity 0.35s ease-in-out;
    -o-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out; 
  }
  .carousel .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    text-align: center;
    width: 100%; 
    
  }
  @media (min-width: 960px) {
    .carousel .control-dots {
      bottom: 0; 
    } 
  }
  .carousel .control-dots .dot {
    -webkit-transition: opacity 0.25s ease-in;
    -moz-transition: opacity 0.25s ease-in;
    -ms-transition: opacity 0.25s ease-in;
    -o-transition: opacity 0.25s ease-in;
    transition: opacity 0.25s ease-in;
    opacity: 0.3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
    background: #fff;
    border-radius: 50%;
    width: 10px;
    height: 8px;
    cursor: pointer;
    display: inline-block;
    margin: 0 12px; 
    ${SuperQuery().minWidth.md.css`
      width: 15px;
      height: 15px;
    `}
  }
  .carousel .control-dots .dot 
  .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100); 
  }
  .carousel .carousel-status {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    color: #fff; 
  }
  .carousel:hover .slide .legend {
    opacity: 1; 
  }
`