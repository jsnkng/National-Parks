import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ alerts }) => {
  return (
    <DesignationList>
      <ul>
      <li><Link href='/designation[designation]' as='/designation/National%20Battlefield/'><a>National Battlefields</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Geologic%20Trail/'><a>National Geologic Trails</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Heritage%20Area/'><a>National Heritage Areas</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Heritage%20Corridor/'><a>National Heritage Corridors</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Historical%20Park/'><a>National Historical Parks</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Historical%20Park%20%26%20Ecological%20Preserve/'><a>National Historical Park & Ecological Preserve</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Historical%20Reserve/'><a>National Historical Reserves</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Historic%20Site/'><a>National Historic Sites</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Historic%20Trail/'><a>National Historic Trails</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Lakeshore/'><a>National Lakeshores</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Military%20Park/'><a>National Military Parks</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Memorial/'><a>National Memorials</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Monument/'><a>National Monuments</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Monument%20%26%20Preserve/'><a>National Monuments & Preserves</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Park/'><a>National Parks</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Parkway/'><a>National Parkway</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Park%20%26%20Preserve/'><a>National Park & Preserve</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Preserve/'><a>National Preserves</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Recreation%20Area/'><a>National Recreation Areas</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20River%20%26%20Recreation%20Area/'><a>National Rivers & Recreation Areas</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Scenic%20Trail/'><a>National Scenic Trails</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/National%20Seashore/'><a>National Seashores</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/Cultural%20Heritage%20Corridor/'><a>Cultural Heritage Corridors</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/International%20Historic%20Site/'><a>International Historic Sites</a></Link></li>
      <li><Link href='/designation[designation]' as='/designation/International%20Park/'><a>International Parks</a></Link></li>
      </ul>
    </DesignationList>
  )
}
  
export default Component

const DesignationList = styled.div`
  background: rgba(25,25,25,0.6);
  margin: 1rem 0;
  padding: 1rem;
  columns: auto 14rem;
  font-size: 1.25rem;
  font-weight: 400; 
  line-height: 1.2;
  border-radius: 4px;
  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0.25rem 0;
  }
  ${SuperQuery().minWidth.sm.css`
    columns: auto 16rem;
    font-size: 2rem;
  `}
`
