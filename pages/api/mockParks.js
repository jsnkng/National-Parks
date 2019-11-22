export default (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(parkList))
}


const parkList = {
  "total": "12",
  "data": [
    {
      "states": "CT,GA,MA,MD,ME,NC,NH,NJ,NY,PA,TN,VA,VT,WV",
      "directionsInfo": "There are many points of access along the Appalachian Trail, whether it is by car, train, bus or plane. For more detailed directions, please refer to the \"Directions\" section of our park webpage.",
      "directionsUrl": "http://www.nps.gov/appa/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/appa/index.htm",
      "weatherInfo": "It is your responsibility to be prepared for all weather conditions, including extreme and unexpected weather changes year-round. As the trail runs from Georgia to Maine there will be different weather conditions depending on your location. For weather along specific sections of the trail and at specific shelters, please refer to: http://www.atweather.org/",
      "name": "Appalachian",
      "latLong": "lat:40.41029575, long:-76.4337548",
      "description": "The Appalachian Trail is a 2,180+ mile long public footpath that traverses the scenic, wooded, pastoral, wild, and culturally resonant lands of the Appalachian Mountains. Conceived in 1921, built by private citizens, and completed in 1937, today the trail is managed by the National Park Service, US Forest Service, Appalachian Trail Conservancy, numerous state agencies and thousands of volunteers.",
      "images": [
        {
          "credit": "Photo Credit: ATC/Benjamin Hays",
          "altText": "Silhouette of a man with backpack standing on McAfee Knob at sunset with mountains in the distance.",
          "title": "McAfee Knob",
          "id": "3801",
          "caption": "McAfee Knob is one of the most popular locations along the A.T. to take photographs.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C8397D6-1DD8-B71B-0BEF4C54462A1EB3.jpg"
        },
        {
          "credit": "Photo Credit: ATC",
          "altText": "The Appalachian Trail runs across a mountain ridge line with views to the horizon of mountain range.",
          "title": "Appalachian Trail",
          "id": "3807",
          "caption": "Crossing into thirteen states, hikers experience a variety of scenery along the way.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C83A128-1DD8-B71B-0B02DED286AFD8C6.jpg"
        },
        {
          "credit": "Photo Credit: ATC/Matthew Davis",
          "altText": "A white blaze marks a tree in the foreground, with a man and child walking away on the wooded trail.",
          "title": "The Infamous White Blaze of the A.T.",
          "id": "3808",
          "caption": "The white blaze marks the Appalachian Trail as a way for hikers to identify the route.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C83A2B0-1DD8-B71B-0B4589220F4D60D9.jpg"
        },
        {
          "credit": "Photo Credit: Maine Appalachian Trail Club",
          "altText": "A volunteer is carrying a split log while walking across a wooden footbridge in the woods.",
          "title": "Volunteer on the A.T.",
          "id": "3809",
          "caption": "The Appalachian Trail is maintained largely by volunteers.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C83A442-1DD8-B71B-0BD0A5F2BD69B9F6.jpg"
        },
        {
          "credit": "Photo Credit: ATC/Greg Walter",
          "altText": "A snowy winter view from the A.T. overlooking snowy mountains and clouds in the distance.",
          "title": "Winter on the A.T.",
          "id": "3810",
          "caption": "Hikers can experience many seasons along the A.T. all year round. It is important to be prepared.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C83A59A-1DD8-B71B-0BBFB87BBDDAABD6.jpg"
        }
      ],
      "designation": "National Scenic Trail",
      "parkCode": "appa",
      "id": "FAEF5684-83A4-4CF2-A701-60CF8D4014BD",
      "fullName": "Appalachian National Scenic Trail"
    },
    {
      "states": "NJ",
      "directionsInfo": "",
      "directionsUrl": "",
      "url": "https://www.nps.gov/xrds/index.htm",
      "weatherInfo": "",
      "name": "Crossroads of the American Revolution",
      "latLong": "lat:40.4621353149414, long:-74.5613021850586",
      "description": "From the heights of the Palisades at Fort Lee to the shores of the Delaware River at Red Bank Battlefield, the Crossroads of the American Revolution offers an unprecedented opportunity to understand and celebrate New Jersey’s rich history. Historic sites, preservation groups, schools, libraries, and museum work together to tell these unique stories.",
      "images": [],
      "designation": "National Heritage Area",
      "parkCode": "xrds",
      "id": "90496999-F497-408F-BB2E-6E58FA511CDB",
      "fullName": "Crossroads of the American Revolution National Heritage Area"
    },
    {
      "states": "NJ,PA",
      "directionsInfo": "Delaware Water Gap National Recreation Area is a long, narrow park that sits between two major interstates, I-80 at the south and I-84 at the north. US 209 is the main north/south road through the park on the Pennsylvania side and Old Mine Road is the main north/south road though the park on the New Jersey side.",
      "directionsUrl": "http://www.nps.gov/dewa/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/dewa/index.htm",
      "weatherInfo": "Spring: Temperatures usually range from lows of 26 F to highs of 80 F with average rainfall of 5 inches.\n\nSummer: Temperatures usually range from lows of 55 F to highs of 85 F with average rainfall of 4 inches. \n\nFall: Temperatures usually range from lows of 30 F to highs of 83F. Fall foliage is at its peak sometime in October as daily mountain temperatures vary frequently and influence the change.\n\nWinter: Temperatures usually range from lows of 15 F to highs of 49 F.",
      "name": "Delaware Water Gap",
      "latLong": "lat:41.12793491, long:-74.94751173",
      "description": "Paddlers slip down the river between low forested mountains; anglers wade the trout streams; hikers scan the valley from the ridge or peer into the 1000-foot-deep Water Gap. The valley has known human hand and voice for 10,000 years. Floodplains nourished the Native farmer; waterfalls drew the Victorian vacationer. Today, a 70,000-acre park welcomes those who seek the outdoors close to home.",
      "images": [
        {
          "credit": "James Hicks",
          "altText": "View of the Delaware Water Gap from river level",
          "title": "Delaware Water Gap",
          "id": "211",
          "caption": "The Delaware Water Gap is the best known feature of the park, a distinct notch cut into the Kittatinny Ridge by the Delaware River.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C79C4E3-1DD8-B71B-0B9EC12DFCA00E1C.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "A waterfall in the background moves towards the viewer through a rocky riverbed",
          "title": "Fulmer Falls",
          "id": "212",
          "caption": "Fulmer Falls is the second of three waterfalls in George W. Childs Park",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C79C5ED-1DD8-B71B-0BFDBB0313C6B8A7.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "A woman braids rye straw for hatmaking",
          "title": "Millbrook Days",
          "id": "213",
          "caption": "A woman braids rye straw for hatmaking",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C79C725-1DD8-B71B-0BF77E79A3DBB0E3.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "a snaking river view from a mountain top",
          "title": "River View from Mount Tammany",
          "id": "214",
          "caption": "High view of the Delaware River from atop Mount Tammany",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C79C832-1DD8-B71B-0BAACF8A16A81B90.jpg"
        },
        {
          "credit": "NPS Photo/Dan Mohr",
          "altText": "Great Blue Herons attending their nests in a tree",
          "title": "Nesting Great Blue Herons",
          "id": "215",
          "caption": "Great Blue Herons attend their nests in a tree",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C79CA13-1DD8-B71B-0B31EF4B06834D81.jpg"
        },
        {
          "credit": "NPS Photo / Michael Cuff",
          "altText": "Dingmans Falls on May 20, 2016",
          "title": "Dingmans Falls",
          "id": "7824",
          "caption": "Dingmans Falls as seen from the wheel chair and stroller accessible boardwalk",
          "url": "https://www.nps.gov/common/uploads/structured_data/47B1994C-1DD8-B71B-0BC5F687A7941034.jpg"
        },
        {
          "credit": "NPS Photo / Michael Cuff",
          "altText": "Silver Thread Falls, at Dingmans Falls Visitor Center",
          "title": "Silver Thread Falls",
          "id": "7825",
          "caption": "Silver Thread Falls, as seen from the Dingmans Falls Boardwalk",
          "url": "https://www.nps.gov/common/uploads/structured_data/48A04A6F-1DD8-B71B-0B8CFD4841E55718.jpg"
        }
      ],
      "designation": "National Recreation Area",
      "parkCode": "dewa",
      "id": "ECCA243E-109D-4D73-8546-B0A2553DD9E5",
      "fullName": "Delaware Water Gap National Recreation Area"
    },
    {
      "states": "NJ,NY",
      "directionsInfo": "Ellis Island is located in New York Harbor, and can only be reached by boat. Ferries are operated by Statue Cruises, and depart from Battery Park in Lower Manhattan in New York City.  Ferries are also available from Liberty State Park in Jersey City, New Jersey.",
      "directionsUrl": "http://www.nps.gov/elis/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/elis/index.htm",
      "weatherInfo": "It is typically colder and more windy in New York Harbor than in elsewhere in the New York City metropolitan area. Winters are cold and damp. Spring and Fall can range from chilly to warm. Summers are warm to hot and humid.",
      "name": "Ellis Island",
      "latLong": "lat:40.69946, long:-74.0401",
      "description": "How far would you travel to find a better life? What if the journey took weeks under difficult conditions?  If you answered \"Whatever it takes,\" you echo the feelings of the 12 million immigrants who passed through these now quiet halls from 1892 to 1954. Ellis Island afforded them the opportunity to attain the American dream for themselves and their descendants. Come hear their stories.",
      "images": [
        {
          "credit": "NPS Photo",
          "altText": "Beaux-Arts brick and limestone building with large arched windows and cupola-topped towers.",
          "title": "Ellis Island Museum of Immigration",
          "id": "4124",
          "caption": "Over 12 million immigrants were processed at Ellis Island during the peak years of 1892-1924, most through this building which opened in 1900.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C856FAB-1DD8-B71B-0B0DD7A0B6955955.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Great Hall has terra cotta-colored tile floor, a balcony, large arched windows, and vaulted ceiling",
          "title": "Ellis Island's Registry Room",
          "id": "4125",
          "caption": "The Registry Room, also known as the Great Hall, is where millions of immigrants were inspected. They were required to pass both a medical and legal inspection before being allowed to enter the United States.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C85712F-1DD8-B71B-0B34087F99512E73.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Brick and limestone building with maroon canopy leading to entrance.",
          "title": "Ellis Island Museum of Immigration",
          "id": "4126",
          "caption": "Visitors to the museum today arrive by ferry, just like immigrants did a century ago.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C8572BD-1DD8-B71B-0B81C6A8E9D0420C.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Honey oak colored tall desk on tiled floor in Great Hall with arched windows and vaulted ceiling.",
          "title": "Replica Inspection Desk in the Registry Room",
          "id": "4127",
          "caption": "Inspectors at Ellis Island would conduct the legal examination from behind desks like these a century ago.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C8573F0-1DD8-B71B-0B81984644CB246E.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Artificially-expanded largely rectangular island with straight seawalls and large buildings.",
          "title": "Bird's Eye View of Ellis Island",
          "id": "4128",
          "caption": "Ellis Island was expanded from just a couple acres to over 30 to make room for a large immigration processing station, that included a state of the art hospital complex.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C857565-1DD8-B71B-0B2A86EE555A1F4D.jpg"
        }
      ],
      "designation": "Part of Statue of Liberty National Monument",
      "parkCode": "elis",
      "id": "73A512A3-807A-457C-8A3B-5862C9C28BBD",
      "fullName": "Ellis Island Part of Statue of Liberty National Monument"
    },
    {
      "states": "NY,NJ",
      "directionsInfo": "Gateway is located in two states; NJ and NY, and has three units:  Jamaica Bay, Sandy Hook and Staten Island.  You can access most of our park by car and public transportation.   Please visit our website for specific directions to all of our units",
      "directionsUrl": "http://www.nps.gov/gate/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/gate/index.htm",
      "weatherInfo": "Gateway National Recreation Area includes several separate land areas spread throughout the New York metropolitan area. The New York area experiences four distinct seasons. Temperatures are moderate in the spring and fall, but range from the high 90's during the summer to snow and sleet in winter.",
      "name": "Gateway",
      "latLong": "lat:40.56536246, long:-73.9171087",
      "description": "Gateway is a large diverse urban park with 27,000 acres spanning Sandy Hook in N.J. and Jamaica Bay and Staten Island in N.Y. It offers green spaces, beaches, wildlife and outdoor recreation, all alongside historic structures and cultural landscapes. It is the 4th most visited National Park Service unit with more than 9.2 million annual visitors. Gateway can be reached by car, ferry, bus or train.",
      "images": [
        {
          "credit": "NPS Photo",
          "altText": "Tent at  Floyd Bennett Field campsite in Gateway's Jamaica Bay unit.",
          "title": "You can camp at all three units of Gateway",
          "id": "4063",
          "caption": "You can camp at all three units of Gateway, in the shadow of NYC.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C85156E-1DD8-B71B-0BBB764337412E34.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Visitors enjoying the sun and sand at Jacob Riis Park",
          "title": "Enjoying a summer's day at Jacob Riis Park",
          "id": "4065",
          "caption": "Millions of visitors visit Gateway's beaches every summer.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C8518CD-1DD8-B71B-0B6CEBA11C295B38.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "The Jamaica Bay Wildlife Refuge Visitor Center",
          "title": "Jamaica Bay Wildlife Refuge",
          "id": "4068",
          "caption": "The Jamaica Bay Wildlife Refuge is the only wildlife refuge in the National Park Service",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C851E18-1DD8-B71B-0BBD48DFDC6DB80D.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "The Sandy Hook lighthouse and keepers quarters",
          "title": "The Sandy Hook Lighthouse",
          "id": "4070",
          "caption": "The Sandy Hook Lighthouse is the oldest continuously operating lighthouse in the United States.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C852120-1DD8-B71B-0B85070979DC9284.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Battery Weed is the fort under the Verrazano Narrows Bridge in Staten Island.",
          "title": "Battery Weed",
          "id": "4073",
          "caption": "Battery Weeds guards the entrance to the New York harbor.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C852619-1DD8-B71B-0B6D168C73AFBBA8.jpg"
        }
      ],
      "designation": "National Recreation Area",
      "parkCode": "gate",
      "id": "BBC5BE3F-E921-40B5-A850-F259D9FAF88C",
      "fullName": "Gateway National Recreation Area"
    },
    {
      "states": "NJ",
      "directionsInfo": "Estell Manor Park, where visitors can see the Great Egg Harbor National Scenic and Recreational River, is located 3.5 miles South of Mays Landing, New Jersey, off of Route 50. It is approximately 17 miles west of Atlantic City. There is a stamper for Passport Stamp Books at the Fox Nature Center, and a stamp can be obtained at the mailing address provided below.",
      "directionsUrl": "http://www.aclink.org/PARKS/mainpages/estell.asp",
      "url": "https://www.nps.gov/greg/index.htm",
      "weatherInfo": "Temperate, with a moderating influence of the Atlantic Ocean.",
      "name": "Great Egg Harbor River",
      "latLong": "lat:39.30421499, long:-74.64969521",
      "description": "The River gradually widens as it picks up the waters of 17 tributaries on its way to Great Egg Harbor and the Atlantic Ocean. Established by Congress in 1992, nearly all of this 129-mile river system rests within the Pinelands National Reserve. This National Park Service unit is unusual in that local jurisdictions continue to administer the lands.",
      "images": [
        {
          "credit": "Tim Kiser",
          "altText": "Still river in the winter with leafless trees on either side",
          "title": "Great Egg Harbor River",
          "id": "4778",
          "caption": "Great Egg Harbor River downstream from Mill Street (New Jersey Route 559) in Mays Landing, New Jersey",
          "url": "https://www.nps.gov/common/uploads/structured_data/69830EAB-1DD8-B71B-0B2995AFD827B8FB.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Sun setting over the river.",
          "title": "Gibson Creek",
          "id": "6789",
          "caption": "Gibson Creek",
          "url": "https://www.nps.gov/common/uploads/structured_data/425BFE7C-1DD8-B71B-0BEAD91965AC7890.jpg"
        },
        {
          "credit": "Akers",
          "altText": "School group examines a fish held by the instructor.",
          "title": "Floating Classrooms",
          "id": "6790",
          "caption": "Students learn about river resources on a floating classroom.",
          "url": "https://www.nps.gov/common/uploads/structured_data/4264700A-1DD8-B71B-0BE6A35701B10E72.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Bright white comet in the early night sky reflects over the river.",
          "title": "Haley's Comet over the Great Egg Harbor River",
          "id": "6791",
          "caption": "Haley's Comet over the Great Egg Harbor River",
          "url": "https://www.nps.gov/common/uploads/structured_data/4276EC67-1DD8-B71B-0B3D7FCEDB5CFD39.jpg"
        },
        {
          "credit": "Palmer",
          "altText": "Winding river surrounded by grasslands on a cloudy day.",
          "title": "Great Egg Harbor River",
          "id": "6792",
          "caption": "The Great Egg Harbor River",
          "url": "https://www.nps.gov/common/uploads/structured_data/4289A3A9-1DD8-B71B-0BFCF884DB700B09.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Medium sized Osprey in a next along the river",
          "title": "Tuckahoe Osprey",
          "id": "6793",
          "caption": "Tuckahoe Osprey",
          "url": "https://www.nps.gov/common/uploads/structured_data/42912E18-1DD8-B71B-0BB2C9B86833D9CF.jpg"
        }
      ],
      "designation": "",
      "parkCode": "greg",
      "id": "5B1021C9-5F48-4747-B0E4-6F508FDF96AE",
      "fullName": "Great Egg Harbor River"
    },
    {
      "states": "PA,NJ",
      "directionsInfo": "The Lower Delaware National Wild and Scenic River is located between Interstate 80 (at Portland, Pennsylvania and Columbia, New Jersey) and Interstate 95 (at exit 51 in Washington Crossing, Pennsylvania and exit 1 in Washington Crossing, New Jersey).\n\nIn Pennsylvania, follow PA-611 and PA-32 to drive along the river.\n\nIn New Jersey, follow NJ-29 south of Frenchtown for a drive along the river.",
      "directionsUrl": "http://www.nps.gov/lode/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/lode/index.htm",
      "weatherInfo": "Spring: Temperatures usually range from lows of 26 F to highs of 80 F with average rainfall of 5 inches.\n\nSummer: Temperatures usually range from lows of 55 F to highs of 85 F with average rainfall of 4 inches. \n\nFall: Temperatures usually range from lows of 30 F to highs of 83F. Fall foliage is at its peak sometime in October as daily mountain temperatures vary frequently and influence the change.\n\nWinter: Temperatures usually range from lows of 15 F to highs of 49 F.",
      "name": "Lower Delaware",
      "latLong": "",
      "description": "The largest free-flowing river in the eastern United States, the Delaware River runs past forests, farmlands, and villages, and it also links some of the most densely populated regions in America.\n\nIn 2000, the National Wild and Scenic River System incorporated key segments of the lower Delaware River to form this unit of the National Park System.",
      "images": [
        {
          "credit": "NPS Photo/Julia Bell",
          "altText": "A rural boat lock with a gate",
          "title": "Delaware Canal at Raubsville, Locks 22 & 23",
          "id": "305",
          "caption": "Locks were used to move boats overland via canals",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C7A403C-1DD8-B71B-0B48D4D57314EA3D.jpg"
        },
        {
          "credit": "NPS Photo/Julia Bell",
          "altText": "An old stone-pier bridge over a river",
          "title": "Raven Rock Bridge",
          "id": "306",
          "caption": "The Bridge from Lumberville, PA to Bulls Island Recreation Area, NJ",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C7A4199-1DD8-B71B-0BBB639114F35E91.jpg"
        },
        {
          "credit": "NPS Photo/Julia Bell",
          "altText": "Kayakers enter the river from a riverside beach",
          "title": "Delaware River Sojourners",
          "id": "307",
          "caption": "Sojourners enter the river at Martins Creek, PA",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C7A42DB-1DD8-B71B-0BD49DA7BCB7957C.jpg"
        },
        {
          "credit": "NPS Photo/Julia Bell",
          "altText": "butterfly lands on a maple leaf",
          "title": "Red Admiral Butterfly",
          "id": "308",
          "caption": "Butterfly at Delaware Canal State Park near Upper Black Eddy, PA",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C7A4445-1DD8-B71B-0B3381881EA2DFAC.jpg"
        },
        {
          "credit": "NPS Photo/Julia Bell",
          "altText": "water falls over a layered stone cliff face",
          "title": "Ringing Rocks County Park",
          "id": "309",
          "caption": "Visitors overlook the waterfall",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C7A45C5-1DD8-B71B-0BFD51D64F58C9A9.jpg"
        }
      ],
      "designation": "National Wild and Scenic River",
      "parkCode": "lode",
      "id": "64FF65B7-0847-4495-9464-667CAFBF4D16",
      "fullName": "Lower Delaware National Wild and Scenic River"
    },
    {
      "states": "NJ",
      "directionsInfo": "Morristown National Historical Park is the easiest to see by car. We have 4 different locations throughout the greater Morristown area. Washington's Headquarters Museum and Ford Mansion as well as Jockey Hollow Visitor Center and Wick House are the two main areas of the Park. Detailed directions are on the park website. They are the best places to start and Rangers can give you directions to the Cross Estate Gardens/New Jersey Brigade Area and Fort Nonsense Area of the park.",
      "directionsUrl": "http://www.nps.gov/morr/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/morr/index.htm",
      "weatherInfo": "Weather in this part of New Jersey is typical of the mid-Atlantic region.",
      "name": "Morristown",
      "latLong": "lat:40.7650755, long:-74.53455122",
      "description": "Morristown National Historical Park commemorates the sites of General Washington and the Continental army’s winter encampment of December 1779 to June 1780, where they survived through what would be the coldest winter on record. The park also maintains a museum & library collection related to the encampments & George Washington, as well as items relating to pre- and post-Revolutionary America.",
      "images": [
        {
          "credit": "NPS Photo/Dan Beards",
          "altText": "The front facade of the Ford Mansion in summer.",
          "title": "Ford Mansion",
          "id": "3201",
          "caption": "The front facade of the Ford Mansion in summer.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C8048A9-1DD8-B71B-0BD77A25090375BD.jpg"
        },
        {
          "credit": "NPS Photo/Dan Beards",
          "altText": "The Wick House surrounded by colorful fall leaves",
          "title": "Wick House",
          "id": "3202",
          "caption": "The Wick House in the fall.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C804A08-1DD8-B71B-0B73C1F0A0ACAD7A.jpg"
        },
        {
          "credit": "NPS Photo/Dan Beards",
          "altText": "The front facade of the Washington's Headquarters Museum",
          "title": "Washington's Headquarters Museum",
          "id": "3204",
          "caption": "The front facade of the Washington's Headquarters Museum, which was designed in 1933 to look similar to Washington's Mt Vernon home.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C804BB2-1DD8-B71B-0BD3719BE49A0FDD.jpg"
        },
        {
          "credit": "NPS Photo/Dan Beards",
          "altText": "Four replica wooden soldier huts on a hillside in winter",
          "title": "Replica Soldier Huts",
          "id": "3205",
          "caption": "These replica soldier huts represent the location of the Pennsylvania Brigade encampment site in Jockey Hollow",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C804D28-1DD8-B71B-0B577BE90E49B5E8.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "The Cross Estate mansion in the springtime",
          "title": "Cross Estate Mansion and Gardens",
          "id": "3206",
          "caption": "The Cross Estate property was the site of the New Jersey Brigade winter encampement in 1779-1780. Today the encampment site is preserved while the estate is host to several beautiful gardens.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C804E96-1DD8-B71B-0B9824672DCF8A75.jpg"
        }
      ],
      "designation": "National Historical Park",
      "parkCode": "morr",
      "id": "D68D9424-CD32-434F-88BF-3069ADFB2744",
      "fullName": "Morristown National Historical Park"
    },
    {
      "states": "NJ",
      "directionsInfo": "The Pinelands National Reserve includes portions of seven southern New Jersey counties, and encompasses over one-million acres of farms, forests and wetlands. It contains 56 communities, from hamlets to suburbs, with over 700,000 permanent residents.",
      "directionsUrl": "http://www.nj.gov/pinelands/about/direct/",
      "url": "https://www.nps.gov/pine/index.htm",
      "weatherInfo": "Spring: 50-70F, sunny with some rain\nSummer: 70-90F, mostly sunny with some rain\nWinter: 0-35F, snow is common\nFall: 50-70F",
      "name": "New Jersey Pinelands",
      "latLong": "lat:39.93835287, long:-74.62499857",
      "description": "This is truly a special place. It's classified as a United States Biosphere Reserve and in 1978 was established by Congress as the country’s first National Reserve. It includes portions of seven southern New Jersey counties, and encompasses over one-million acres of farms, forests and wetlands. It contains 56 communities, from hamlets to suburbs, with over 700,000 permanent residents.",
      "images": [
        {
          "credit": "Farmartin",
          "altText": "Tall pine trees surround a thin unpaved trail",
          "title": "Batona Trail in the NJ Pinelands",
          "id": "4779",
          "caption": "Batona Trail in the Brendan T. Byrne State Forest part of the NJ Pinelands",
          "url": "https://www.nps.gov/common/uploads/structured_data/6A36EF6A-1DD8-B71B-0B6EF527BB26F6F0.jpg"
        }
      ],
      "designation": "National Reserve",
      "parkCode": "pine",
      "id": "D0F897A0-9545-4901-A1B8-7128E11A51FA",
      "fullName": "New Jersey Pinelands National Reserve"
    },
    {
      "states": "NJ",
      "directionsInfo": "From: Garden State Parkway (New Jersey)\nNorth:\nTake exit 155P on left to Route 19 TO WEST Route 80 Paterson. \nSouth:\nTake Exit 159 (Saddlebrook) on your right. After taking the exit, make your second right onto I-80 West (Paterson).\n\nFrom: Interstate 80\nI-80 West:\nTake Exit 57 A-B. Taking (Exit 57- B) (Downtown Paterson) follow the Downtown Paterson sign.\nI-80 East:\nTake (Exit 57- B), take exit Route 80 west Grand St./ Del Water Gap KEEP RIGHT exit. Stay to the right for Grand Street exit ramp.",
      "directionsUrl": "http://www.nps.gov/pagr/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/pagr/index.htm",
      "weatherInfo": "http://forecast.weather.gov/MapClick.php?lat=40.91475800178142&lon=-74.1678490947591#.VusP4uIrK71",
      "name": "Paterson Great Falls",
      "latLong": "lat:40.91584645, long:-74.18021494",
      "description": "Cotton and silk fabrics; steam locomotives; continuous rolls of paper; airplane engines. What do these things have in common? They were all manufactured in the same place - Paterson, NJ.\n\nIn 1792, Paterson was established, America's first planned industrial city, centered around the Great Falls of the Passaic River. From humble mills rose industries that changed the face of the United States.",
      "images": [
        {
          "credit": "NPS Photo/Ilyse Goldman",
          "altText": "snow covered hydro plant and waterfall",
          "title": "Winter Wonderland",
          "id": "4763",
          "caption": "Lovely winter day at Paterson Great Falls",
          "url": "https://www.nps.gov/common/uploads/structured_data/3EDC4916-1DD8-B71B-0B4282C70FC365B7.jpg"
        },
        {
          "credit": "NPS Photo/ Terry McKenna",
          "altText": "Wind blows US Flag and surrounding area",
          "title": "Windy Day at the Falls",
          "id": "4764",
          "caption": "Doesn't get more photogenic than this",
          "url": "https://www.nps.gov/common/uploads/structured_data/3F720292-1DD8-B71B-0BBF0A529555D377.jpg"
        },
        {
          "credit": "NPS Photo/Brady O'Connor",
          "altText": "Sunny day and waterfall view",
          "title": "Find Your Park at Paterson Great Falls!",
          "id": "4765",
          "caption": "Find Your Park at Paterson Great Falls National Historical Park!",
          "url": "https://www.nps.gov/common/uploads/structured_data/3F7DA6E2-1DD8-B71B-0B8B16D14181A699.jpg"
        },
        {
          "credit": "NPS Photo/Terry McKenna",
          "altText": "Man overlooking the falls while taking a selfie",
          "title": "Selfie at the Falls",
          "id": "4770",
          "caption": "Talk about a selfie!",
          "url": "https://www.nps.gov/common/uploads/structured_data/40ABF103-1DD8-B71B-0B381AAC1F9EAD21.jpg"
        },
        {
          "credit": "NPS Photo/Terry McKenna",
          "altText": "Mist coming up from where the water drops into the passaic river",
          "title": "Misty Overlook",
          "id": "4771",
          "caption": "One of the best spots to overlook the falls and Garret Mountain, Paterson's largest mountain.",
          "url": "https://www.nps.gov/common/uploads/structured_data/40B3D9B4-1DD8-B71B-0BB17EB9041E793A.jpg"
        },
        {
          "credit": "NPS Photo/Terry McKenna",
          "altText": "summer foliage surrounding a bridge",
          "title": "Green Day at the Raceways!",
          "id": "4772",
          "caption": "bridge over the upper raceway to the old stoney road trail",
          "url": "https://www.nps.gov/common/uploads/structured_data/40D199BC-1DD8-B71B-0BB9D6DF983E1769.jpg"
        }
      ],
      "designation": "National Historical Park",
      "parkCode": "pagr",
      "id": "9604169F-6A23-4E70-937B-3BE7315590F2",
      "fullName": "Paterson Great Falls National Historical Park"
    },
    {
      "states": "NJ",
      "directionsInfo": "From the Garden State Parkway take exit 145 or from the New Jersey Turnpike take Exit 15W to Route 280 West. Take Route 280 West to Exit 10. Turn right onto Northfield Avenue. At second light turn left onto Main Street. Go about 0.75 mile  to parking on left and Laboratory Complex on the right.\nFrom Route 280 East take exit 9. Turn left onto Mt. Pleasant Avenue.  At second traffic light turn left onto Main Street. Go about 0.50 mile to parking on left and Laboratory Complex on the right.",
      "directionsUrl": "http://www.nps.gov/edis/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/edis/index.htm",
      "weatherInfo": "Spring and Fall weather can be cool, while summer is usually warm and humid.  Winter is frequently snowy and cold.  It is recommended that visitors dress for the weather.  Visitors may need jackets or rain gear as they will be walking between buildings as they tour the park during inclement weather. Please keep any rain gear/umbrellas with you during your visit.",
      "name": "Thomas Edison",
      "latLong": "lat:40.78549896, long:-74.23821139",
      "description": "Thomas Edison’s home and laboratory are a step back in time, when machines were run by belts and pulleys and music was played on phonographs.  Where to the passerby, the buildings betray little evidence of the industries they once started.  Discover where America’s greatest inventor changed our world forever.",
      "images": [
        {
          "credit": "NPS Photo",
          "altText": "Large salmon colored house with green lawn and blue sky",
          "title": "Glenmont - Home of Thomas Edison",
          "id": "3493",
          "caption": "Thomas Edison purchased Glenmont as a wedding present for his wife Mina.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C81E2B0-1DD8-B71B-0B55C38EB2E224A5.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "large room with machines connected to belts and pullies",
          "title": "Heavy Machine Shop at Laboratory Complex",
          "id": "3494",
          "caption": "One of two machine shops where Thomas Edison and his staff worked on new ideas and products.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C81E418-1DD8-B71B-0BC491FC962D191C.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Cream colored, two story cement building",
          "title": "Glenmont Garage",
          "id": "3495",
          "caption": "Thomas Edison's poured concrete garage houses several electric and gas vehicles belonging to the family.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C81E5DB-1DD8-B71B-0BE0C40555D35573.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Small red building next to large brick building with a water tower in the background.",
          "title": "Park Entrance",
          "id": "3496",
          "caption": "Just as Thomas Edison did every morning, visitors enter through the main laboratory gates.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C81E760-1DD8-B71B-0BDD84F26F839FA7.jpg"
        },
        {
          "credit": "NPS Photo",
          "altText": "Large black building.",
          "title": "Replica Black Maria",
          "id": "3497",
          "caption": "The Black Maria was the first building built for the recording of motion pictures.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C81E919-1DD8-B71B-0B2945F0D219EBCF.jpg"
        }
      ],
      "designation": "National Historical Park",
      "parkCode": "edis",
      "id": "BFE248C8-40CD-4DC8-AC07-AE61A0D81FF3",
      "fullName": "Thomas Edison National Historical Park"
    },
    {
      "states": "MA,RI,CT,NY,NJ,PA,DE,MD,VA,DC",
      "directionsInfo": "The Washington-Rochambeau Revolutionary Route National Historic Trail encompasses over 680 miles of land and water trails through Rhode Island, Massachusetts, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Washington D.C., and Virginia",
      "directionsUrl": "http://www.nps.gov/waro/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/waro/index.htm",
      "weatherInfo": "With over 680 miles of land and water trails and hundreds of historical sites, there is a wide variety in weather. Please check with your favorite weather website before traveling.",
      "name": "Washington-Rochambeau Revolutionary Route",
      "latLong": "",
      "description": "In 1781, General Rochambeau’s French Army joined forces with General Washington’s Continental Army to fight the British Army in Yorktown, Virginia. With the French Navy in support, the allied armies moved hundreds of miles to become the largest troop movement of the American Revolution. The effort and cooperation between the two sides led to a victory at Yorktown and secured American independence.",
      "images": [
        {
          "credit": "NPS Photo",
          "altText": "Flag marking the trail",
          "title": "Washington Rochambeau",
          "id": "4760",
          "caption": "Washington-Rochambeau NHT banner on 2nd Street in Philadelphia, Pennsylvania.",
          "url": "https://www.nps.gov/common/uploads/structured_data/38D13B48-1DD8-B71B-0B557C5D33E45D9D.jpg"
        }
      ],
      "designation": "National Historic Trail",
      "parkCode": "waro",
      "id": "3D547E73-F0BF-4FEA-9CAC-9611D024E2FF",
      "fullName": "Washington-Rochambeau Revolutionary Route National Historic Trail"
    }
  ],
  "limit": "50",
  "start": "1"
}