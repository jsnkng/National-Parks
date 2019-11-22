import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Map = () => {
    
  return (
    <MapWrapper>
    <h2>Find National Parks by State</h2>
      <div 
        style={{display: "block",
        backgroundImage: "url('http://www.image-maps.com/images/maps/812073229_map_us_outline.png')", 
        position: "relative",
        padding: "0px",
        width: "550px", 
        height: "375px",  
        backgroundPosition: "initial initial",
        backgroundRepeat: "initial initial"}}>
      <img
        src="http://www.image-maps.com/images/maps/812073229_map_us_outline.png" width="550" height="375" useMap="#usa" 
        style={{opacity: "0", 
          position: "absolute",
          left: "0px", 
          top: "0px",
          padding: "0px", 
          border: "0px"}} />
      </div>
        <map name="usa">
        <area shape="poly" coords="28,3,27,5,27,10,27,14,28,18,27,22,27,27,26,31,26,33,29,33,31,34,33,35,33,37,34,40,34,42,36,44,39,46,42,46,46,46,49,47,51,47,54,47,57,47,61,47,66,49,73,49,79,50,86,52,88,52,89,51,89,48,90,43,91,40,91,37,92,33,93,31,93,28,94,25,95,21,95,19,96,17,96,15,97,13,94,11,91,11,86,10,83,9,78,8,75,7,73,7,69,6,67,5,63,5,61,4,58,3,56,2,53,2,51,1,49,1,47,1,47,3,47,5,47,7,47,8,47,10,47,11,48,13,47,15,47,17,46,17,45,17,46,16,46,15,46,13,45,12,43,11,41,9,39,9,38,7,37,7,35,6,33,5,33,5,31,4,30,3" href="/state/WA" alt="Washington" title="poly_55" target="_self"  />
        <area shape="poly" coords="26,32,22,45,13,65,8,73,7,84,28,90,64,100,75,102,83,77,83,68,90,56,88,52,77,49,51,46,36,43,33,35" href="/state/OR" alt="Oregon" title="Oregon" />
        <area shape="poly" coords="8,85,6,93,2,102,1,111,2,120,3,129,8,143,9,154,10,166,17,186,27,196,44,212,48,222,73,227,76,220,82,210,82,202,74,186,38,134,47,97" href="/state/CA" alt="California" title="California" />
        <area shape="poly" coords="96,13,88,50,91,57,82,68,82,76,75,101,133,113,137,79,126,78,118,71,115,61,110,62,111,57,113,50,103,29,104,15" href="/state/ID" alt="Idaho" title="Idaho" />
        <area shape="poly" coords="48,97,38,134,81,201,81,188,83,182,89,182,105,109" href="/state/NV" alt="Nevada" title="Nevada" />
        <area shape="poly" coords="105,109,93,172,142,182,149,128,129,125,133,113" href="/state/UT" alt="Utah" title="Utah" />
        <area shape="poly" coords="92,174,88,185,84,183,80,196,84,208,76,218,76,226,72,230,111,253,133,257,143,182" href="/state/AZ" alt="Arizona" title="Arizona" />
        <area shape="poly" coords="104,16,104,34,113,49,109,61,115,62,118,73,131,78,139,75,204,82,208,30" href="/state/MT" alt="Montana" title="Montana" />
        <area shape="poly" coords="140,75,132,125,198,134,204,83" href="/state/WY" alt="Wyoming" title="Wyoming" />
        <area shape="poly" coords="151,130,143,180,216,188,220,136" href="/state/CO" alt="Colorado" title="Colorado" />
        <area shape="poly" coords="145,182,133,255,142,257,144,250,161,252,163,250,199,253,206,189" href="/state/NM" alt="New Mexico" title="New Mexico" />
        <area shape="poly" coords="208,30,206,68,274,72,267,32" href="/state/ND" alt="North Dakota" title="North Dakota" />
        <area shape="poly" coords="206,69,203,109,254,111,265,115,274,119,276,82,271,78,272,72" href="/state/SD" alt="South Dakota" title="South Dakota" />
        <area shape="poly" coords="202,109,200,134,218,138,219,150,287,152,282,143,274,117,265,114,259,113,250,110" href="/state/NE" alt="Nebraska" title="Nebraska" />
        <area shape="poly" coords="220,149,217,189,294,191,293,161,289,157,288,152,282,150" href="/state/KS" alt="Kansas" title="Kansas" />
        <area shape="poly" coords="206,189,206,195,236,197,237,223,257,231,277,235,288,234,297,236,294,192,290,191" href="/state/OK" alt="Oklahoma" title="Oklahoma" />
        <area shape="poly" coords="206,195,200,253,162,251,165,258,178,273,182,282,197,293,203,283,221,289,237,314,246,330,265,335,263,319,275,302,304,287,306,267,301,246,300,236,289,232,265,231,244,225,238,222,236,197" href="/state/TX" alt="Texas" title="Texas" />
        <area shape="poly" coords="269,33,274,70,272,77,275,84,276,107,324,103,324,96,313,88,308,79,310,70,318,56,336,44,323,41,311,38,296,36,290,29,285,30" href="/state/MN" alt="Minnesota" title="Minnesota" />
        <area shape="poly" coords="274,105,274,116,282,142,326,144,329,134,328,130,337,122,330,113,325,106,322,103" href="/state/IA" alt="Iowa" title="Iowa" />
        <area shape="poly" coords="283,143,292,162,295,181,294,197,340,197,340,203,348,196,349,188,338,172,340,165,333,162,325,152,324,143" href="/state/MS" alt="Missouri" title="Missouri" />
        <area shape="poly" coords="295,197,295,234,300,239,302,244,333,243,333,232,341,215,346,204,340,201,341,197,337,196" href="/state/AK" alt="Arkansas" title="Arkansas" />
        <area shape="poly" coords="301,243,304,261,307,270,302,287,321,287,327,284,341,291,349,289,360,292,356,287,357,280,352,278,349,269,329,266,335,249,332,241" href="/state/LA" alt="Louisiana" title="Louisiana" />
        <area shape="poly" coords="314,62,309,76,310,87,323,96,326,108,331,117,357,114,358,99,362,78,356,82,356,74,341,66,327,61,323,58" href="/state/WI" alt="Wisconsin" title="Wisconsin" />
        <area shape="poly" coords="333,116,337,123,331,130,329,134,325,146,331,159,339,161,340,173,347,183,356,184,364,170,363,137,359,120,356,116" href="/state/IL" alt="Illinois" title="Illinois" />
        <area shape="poly" coords="352,185,349,193,367,192,408,188,423,173,415,161,408,159,394,156,389,163,380,172,366,176,361,177" href="/state/KY" alt="Kentucky" title="Kentucky" />
        <area shape="poly" coords="349,194,342,214,400,211,408,201,422,194,429,184,373,191,364,191" href="/state/TN" alt="Tennessee" title="Tennessee" />
        <area shape="poly" coords="340,216,334,226,332,235,335,250,329,264,336,269,349,267,353,275,365,274,363,214" href="/state/MI" alt="Mississippi" title="Mississippi" />
        <area shape="poly" coords="364,213,363,255,365,273,377,274,373,266,402,263,403,244,391,212" href="/state/AL" alt="Alabama" title="Alabama" />
        <area shape="poly" coords="391,211,402,244,404,263,438,266,439,260,446,242,423,216,413,207" href="/state/GA" alt="Georgia" title="Georgia" />
        <area shape="poly" coords="374,266,378,273,390,273,397,277,407,278,418,275,430,280,432,298,444,316,459,328,470,328,469,310,458,283,449,268,442,260,435,260,433,264,422,264,404,265,399,261" href="/state/FL" alt="Florida" title="Florida" />
        <area shape="poly" coords="416,208,417,213,433,226,447,245,462,225,470,214,453,204,442,206,439,202,428,202" href="/state/SC" alt="South Carolina" title="South Carolina" />
        <area shape="poly" coords="428,185,415,197,402,205,407,209,424,204,439,202,456,205,471,215,487,202,492,185,488,175" href="/state/NC" alt="North Carolina" title="North Carolina" />
        <area shape="poly" coords="422,174,412,186,444,184,487,175,487,169,482,167,480,157,474,153,470,148,465,142,458,143,453,150,447,154,442,167,434,173" href="/state/VA" alt="Virginia" title="Virginia" />
        <area shape="poly" coords="327,60,337,66,352,71,355,82,360,73,376,66,392,64,384,57,377,55,367,58,357,58,351,55,351,49,341,53" href="/state/MI" alt="Michigan" title="Michigan" />
        <area shape="poly" coords="382,68,378,77,371,84,368,95,372,112,368,124,388,121,401,120,409,103,405,89,401,90,395,96,393,88,398,72" href="/state/MI" alt="Michigan" title="Michigan" />
        <area shape="poly" coords="363,125,364,154,361,172,370,173,386,166,394,157,388,121" href="/state/IN" alt="Indiana" title="Indiana" />
        <area shape="poly" coords="389,122,393,156,409,160,418,161,426,149,433,140,430,113,419,120,410,122,404,121,401,119" href="/state/OH" />
        <area shape="poly" coords="431,136,430,144,422,150,416,159,420,168,429,175,439,169,445,158,449,154,456,144,462,142,458,140,451,143,445,145,442,141,437,142" href="/state/WV" alt="West Virginia" title="West Virginia" />
        <area shape="poly" coords="430,112,434,141,486,131,489,125,484,119,486,107,479,102,455,108" href="/state/PA" alt="Pennsylvania" title="Pennsylvania" />
        <area shape="poly" coords="441,92,441,100,434,107,454,107,477,102,487,109,499,112,497,95,494,74,489,65,489,59,477,59,468,69,463,80,459,87" href="/state/NY" alt="New York" title="New York" />
        <area shape="poly" coords="445,139,448,145,459,138,468,142,472,154,480,155,487,150,478,142,481,134,470,134" href="/state/MD" alt="Maryland" title="Maryland" />
        <area shape="poly" coords="507,153,507,164,525,164,525,153" href="/state/MD" alt="Maryland" title="Maryland" />
        <area shape="poly" coords="507,138,507,149,525,149,525,138" href="/state/DE" alt="Delaware" title="Delaware" />
        <area shape="poly" coords="507,122,507,133,525,133,525,122" href="/state/NJ" alt="New Jersey" title="New Jersey" />
        <area shape="poly" coords="520,108,520,119,538,119,538,108" href="/state/CT" alt="Connecticut" title="Connecticut" />
        <area shape="poly" coords="530,93,530,104,548,104,548,93" href="/state/RI" alt="Rhode Island" title="Rhode Island" />
        <area shape="poly" coords="528,77,528,88,546,88,546,77" href="/state/MA" alt="Massachusetts" title="Massachusetts" />
        <area shape="poly" coords="463,45,463,56,481,56,481,45" href="/state/VT" alt="Vermont" title="Vermont" />
        <area shape="poly" coords="484,31,484,42,502,42,502,31" href="/state/NH" alt="New Hampshire" title="New Hampshire" />
        <area shape="poly" coords="506,50,520,80,527,65,545,49,544,42,535,33,529,16,523,16,516,19,515,31,511,42" href="/state/ME" alt="Maine" title="Maine" />
        <area shape="poly" coords="52,249,42,253,37,260,31,265,32,270,39,276,39,285,32,281,22,282,26,292,37,294,39,302,30,305,27,313,28,324,39,329,48,337,43,348,33,356,21,360,7,364,12,369,33,362,48,353,59,343,68,333,78,327,85,321,105,321,131,332,147,344,158,340,154,329,141,324,130,316,114,312,107,303,99,271,92,253,84,250,66,250" href="/state/AK" alt="Alaska" title="Alaska" />
        <area shape="poly" coords="147,290,145,298,153,297,165,300,170,308,185,312,187,323,197,331,207,325,201,316,192,306,184,299,171,294,161,288,151,288" href="/state/HI" alt="Hawaii" title="Hawaii" />
        <area shape="poly" coords="487,110,485,115,489,125,488,130,484,132,491,137,497,134,497,123,494,117" href="/state/NJ" alt="New Jersey" title="New Jersey" />
        <area shape="poly" coords="490,59,492,73,497,86,502,80,504,63,504,55" href="/state/VT" alt="Vermont" title="Vermont" />
        <area shape="poly" coords="506,51,505,61,503,74,502,86,513,83,519,80,512,67" href="/state/NH" alt="New Hampshire" title="New Hampshire" />
        <area shape="poly" coords="497,88,498,97,516,93,524,95,529,91,522,87,519,83,511,83" href="/state/MA" alt="Massachusetts" title="Massachusetts" />
        </map>
      </MapWrapper>
  )
}


  
export default Map


const MapWrapper = styled.div`
  margin: 20px auto;
  width: 550px;
`
