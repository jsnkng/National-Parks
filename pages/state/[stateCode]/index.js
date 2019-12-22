import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../components/datastates'
import Masthead__Component from '../../../components/masthead'
import Footer__Component from '../../../components/footer'

import Park__Component from '../../../components/park'
import MapLive__Component from '../../../components/maplive'

const Parks = props => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }

  
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)

let markers = []
// markers.push({id: park.id, latLong: park.latLong, name: park.name, description: park.description}) 

  return (
    <ParksWrapper>
    <Masthead__Component 
      pageTitle={'National Park Service'} 
      pageStateCode={stateCode}
      pageSubTitle={'A State-by-State Guide'}
      pageSubSubTitle={states[stateCode][0]}
      pageSubSubSubTitle={''}
      pageLinkState={false}
    />
     <Spinner className={isSpinnerVisible ? 'show' : 'hide'}>
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          Loading
          </div>
        </Spinner>
      <MapLive__Wrapper>
        <MapLive__Component
            latLong={states[stateCode][2]}
            name={states[stateCode][0]}
            designation="D"
            zoom={6}
            markers={markers}
            link={true}
          />
      </MapLive__Wrapper>
      <ParksContainer  onClick={handleBannerClick}>
        { parks.slice(0).map((item) => {
          markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description, stateCode:stateCode, parkCode:item.parkCode})
            return(
              <Park__Component 
                key={item.id} 
                data={item} 
                stateCode={stateCode}
              />
            )
          })
        }
      </ParksContainer>
      <Footer__Component
        pageTitle={'National Park Service'} 
        pageStateCode={stateCode}
        pageSubTitle={'A State-by-State Guide'}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle={''}
       />
    </ParksWrapper>
  )
}
  
Parks.getInitialProps = async (context) => {
  const {stateCode} = context.query
  const {origin}  = absoluteUrl(context.req)
  const stateResult = await fetch(`${origin}/api/state/${stateCode}`)
  const result = await stateResult.json()
  return result
}
  
export default Parks

const ParksWrapper = styled.div`
position:relative;
  padding: 60px 0 0 0;
  ${SuperQuery().minWidth.sm.css`
    padding: 80px 0 0 0;
  `}
`
const ParksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 0px;
`
const MapLive__Wrapper = styled.div`
  position:relative;
  height: 400px !important;
  z-index: 10;
`
const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 400;
  background-color: rgba(0,0,0,0.8);
  color: #ffffff;
  font-size: .7em;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`
