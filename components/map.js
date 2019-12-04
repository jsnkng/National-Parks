import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Map = () => {
  return (
    <MapWrapper>
    
      <img src="/US-map.png" alt="National Map" width="550" border="0" useMap="#Map" />
      <map name="Map" id="Map">
      <Link href="/state/[stateCode]"  as='/state/hi/'><area shape="rect" alt="Hawaii" coords="163,293,239,351" /></Link>
      <Link href="/state/[stateCode]"  as='/state/vi/'><area shape="rect" alt="Virgin Islands" coords="433,294,477,354" /></Link>
      <Link href="/state/[stateCode]"  as='/state/mp/'><area shape="rect" alt="Northern Mariana Islands" coords="424,218,496,287" /></Link>
      <Link href="/state/[stateCode]"  as='/state/pr/'><area shape="rect" alt="Puerto Rico" coords="368,295,426,347" /></Link>
      <Link href="/state/[stateCode]"  as='/state/gu/'><area shape="rect" alt="Guam" coords="321,295,357,348" /></Link>
      <Link href="/state/[stateCode]"  as='/state/as/'><area shape="rect" alt="American Samoa" coords="252,294,308,342" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ak/'><area shape="poly" alt="Alaska" coords="93,257,102,260,130,300,116,317,122,316,140,341,129,340,107,316,77,317,71,323,65,331,62,331,60,326,47,334,43,336,43,339,37,336,31,337,21,336,27,334,53,324,52,319,49,318,43,314,42,309,36,302,38,292,44,288,47,287,52,287,50,283,41,279,42,271,50,271,53,271,52,257,65,249,80,251,84,254" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ca/'><area shape="poly" alt="California" coords="21,72,14,97,30,165,57,189,76,191,83,177,54,132,48,113,53,84,21,73,67,176,65,176" /></Link>
      <Link href="/state/[stateCode]"  as='/state/nv/'><area shape="poly" alt="Nevada" coords="56,86,50,112,80,162,86,147,93,142,99,96" /></Link>
      <Link href="/state/[stateCode]"  as='/state/az/'><area shape="poly" alt="Arizona" coords="91,152,87,175,77,195,107,210,124,213,130,154,91,152" /></Link>
      <Link href="/state/[stateCode]"  as='/state/nm/'><area shape="poly" alt="New Mexico" coords="135,156,127,213,133,216,134,209,177,209,180,160" /></Link>
      <Link href="/state/[stateCode]"  as='/state/wa/'><area shape="poly" alt="Washington" coords="40,4,39,27,61,40,86,42,93,15,39,4" /></Link>
      <Link href="/state/[stateCode]"  as='/state/or/'><area shape="poly" alt="Oregon" coords="39,35,52,45,81,47,80,88,23,71" /></Link>
      <Link href="/state/[stateCode]"  as='/state/id/'><area shape="poly" alt="Idaho" coords="94,15,87,53,83,89,124,96,128,76,107,46,104,17" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ut/'><area shape="poly" alt="Utah" coords="105,103,136,110,132,151,97,147,100,106" /></Link>
      <Link href="/state/[stateCode]"  as='/state/co/'><area shape="poly" alt="Colorado" coords="140,112,136,152,190,157,194,120" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ar/'><area shape="poly" alt="Arkansas" coords="245,287" /></Link>
      <Link href="/state/[stateCode]"  as='/state/mt/'><area shape="poly" alt="Montana" coords="110,19,113,47,128,66,181,70,185,29" /></Link>
      <Link href="/state/[stateCode]"  as='/state/wy/'><area shape="poly" alt="Wyoming" coords="128,103,177,110,180,77,132,71" /></Link>
      <Link href="/state/[stateCode]"  as='/state/tx/'><area shape="poly" alt="Texas" coords="149,215,163,225,165,239,179,244,184,239,195,238,213,264,214,273,233,282,234,261,262,239,261,213,261,199,249,195,224,196,208,187,207,168,186,166,184,215" /></Link>
      <Link href="/state/[stateCode]"  as='/state/nd/'><area shape="poly" alt="North Dakota" coords="188,30,186,61,238,63,235,31" /></Link>
      <Link href="/state/[stateCode]"  as='/state/sd/'><area shape="poly" alt="South Dakota" coords="184,66,182,91,238,97,239,70,233,66,189,65" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ne/'><area shape="poly" alt="Nebraska" coords="183,94,180,113,197,115,197,126,247,129,238,101" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ks/'><area shape="poly" alt="Kansas" coords="197,131,193,159,255,158,256,138,246,132" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ok/'><area shape="poly" alt="Oklahoma" coords="188,159,188,164,212,167,212,185,228,194,254,193,254,165,247,163" /></Link>
      <Link href="/state/[stateCode]"  as='/state/mn/'><area shape="poly" alt="Minnesota" coords="237,32,240,66,240,89,280,89,268,76,267,64,270,57,286,42" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ia/'><area shape="poly" alt="Iowa" coords="244,92,281,93,282,100,288,108,281,120,249,120,244,102" /></Link>
      <Link href="/state/[stateCode]"  as='/state/mo/'><area shape="poly" alt="Missouri" coords="251,124,258,137,259,162,301,163,298,152,288,145,290,140,281,125"  /></Link>
      <Link href="/state/[stateCode]"  as='/state/ar/'><area shape="poly" alt="Arkansas" coords="258,168,293,167,291,172,296,172,289,194,286,202,263,203,262,197,257,194" /></Link>
      <Link href="/state/[stateCode]"  as='/state/la/'><area shape="poly" alt="Louisiana" coords="264,205,264,218,270,224,264,238,280,242,296,245,306,244,305,237,300,227,283,227,290,211,285,206" /></Link>
      <Link href="/state/[stateCode]"  as='/state/wi/'><area shape="poly" alt="Wisconsin" coords="283,54,275,60,272,71,282,85,282,97,290,100,307,97,308,77,306,68,291,60" /></Link>
      <Link href="/state/[stateCode]"  as='/state/il/'><area shape="poly" alt="Illinois" coords="291,105,282,123,293,141,303,155,308,155,313,138,311,110,305,101" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ms/'><area shape="poly" alt="Mississippi" coords="296,182,289,202,290,209,292,213,288,225,302,224,305,232,314,229,312,217,311,182" /></Link>
      <Link href="/state/[stateCode]"  as='/state/al/'><area shape="poly" alt="Alabama" coords="314,180,314,219,316,229,325,228,321,222,344,220,342,211,344,206,335,179"/></Link>
      <Link href="/state/[stateCode]"  as='/state/fl/'><area shape="poly" alt="Florida" coords="326,229,325,224,346,221,348,225,378,221,397,257,397,276,390,276,375,264,368,242,356,233,336,238" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ga/'><area shape="poly" alt="Georgia" coords="337,178,347,206,344,212,348,222,378,220,378,211,381,204,370,194,356,180" /></Link>
      <Link href="/state/[stateCode]"  as='/state/sc/'><area shape="poly" alt="South Carolina" coords="361,174,355,177,362,181,373,193,382,202,393,188,396,181,387,174,378,175,375,173,361,174" /></Link>
      <Link href="/state/[stateCode]"  as='/state/tn/'><area shape="poly" alt="Tennessee" coords="303,165,295,180,352,177,362,167,369,157" /></Link>
      <Link href="/state/[stateCode]"  as='/state/nc/'><area shape="poly" alt="North Carolina" coords="377,155,361,173,389,172,399,180,415,175,427,154,418,151" /></Link>
      <Link href="/state/[stateCode]"  as='/state/mi/'><area shape="poly" alt="Michigan" coords="290,55,306,64,318,80,323,96,318,105,345,102,351,88,336,62,330,53,300,48" /></Link>
      <Link href="/state/[stateCode]"  as='/state/in/'><area shape="poly" alt="Indiana" coords="313,109,315,132,314,140,314,149,327,144,332,136,335,132,333,106" /></Link>
      <Link href="/state/[stateCode]"  as='/state/oh/'><area shape="poly" alt="Ohio" coords="336,107,337,132,357,135,367,122,366,98,352,107,345,104" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ky/'><area shape="poly" alt="Kentucky" coords="304,163,304,158,310,157,313,151,329,146,338,135,355,137,356,142,362,147,369,155" /></Link>
      <Link href="/state/[stateCode]"  as='/state/wv/'><area shape="poly" alt="West Virginia" coords="369,123,369,123,357,137,358,142,372,155,390,132,394,122,390,119" /></Link>
      <Link href="/state/[stateCode]"  as='/state/va/'><area shape="poly" alt="Virginia" coords="395,124,381,148,376,154,414,150,407,132" /></Link>
      <Link href="/state/[stateCode]"  as='/state/me/'><area shape="poly" alt="Maine" coords="437,21,451,21,463,43,439,63,433,45,435,40" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ny/'><area shape="poly" alt="New York" coords="377,82,373,94,411,88,413,93,422,84,415,66,409,56" /></Link>
      <Link href="/state/[stateCode]"  as='/state/pa/'><area shape="poly" alt="Pennsylvania" coords="371,96,368,100,369,119,393,117,395,113,412,113,415,109,411,103,412,96,408,90" /></Link>
      <Link href="/state/[stateCode]"  as='/state/dc/'><area shape="rect" alt="Washington, DC" coords="475,157,494,167" /></Link>
      <Link href="/state/[stateCode]"  as='/state/de/'><area shape="rect" alt="Delaware" coords="475,147,494,156" /></Link>
      <Link href="/state/[stateCode]"  as='/state/md/'><area shape="rect" alt="Maryland" coords="475,136,494,146" /></Link>
      <Link href="/state/[stateCode]"  as='/state/nj/'><area shape="rect" alt="New Jersey" coords="475,123,494,132" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ct/'><area shape="rect" alt="Connecticut" coords="475,112,494,122" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ri/'><area shape="rect" alt="Rhode Island" coords="475,99,494,109" /></Link>
      <Link href="/state/[stateCode]"  as='/state/ma/'><area shape="rect" alt="Massachusetts" coords="475,80,494,89" /></Link>
      <Link href="/state/[stateCode]"  as='/state/nh/'><area shape="rect" alt="New Hampshire" coords="475,62,494,71" /></Link>
      <Link href="/state/[stateCode]"  as='/state/vt/'><area shape="rect" alt="Vermont" coords="475,50,494,60" /></Link>
    </map>
  </MapWrapper>
  )
}


  
export default Map


const MapWrapper = styled.div`
  margin: 20px auto;
  area:hover {
    cursor: pointer;
  }
  text-align: center;
`
