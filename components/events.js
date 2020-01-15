import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad, { forceCheck } from 'react-lazyload'
import Email from './elements/email'
import Phone from './elements/phone'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import DayPicker from 'react-day-picker'
import SlideShow from './slideshowSmall'
// import 'react-day-picker/lib/style.css';

const Component = ({ events }) => {
  const toDateFormat = (date) => {
    // const d = date.split(' ')
    // const d1 = Date.parse(d[0])
    // const nd = new Date(d1)
    // return nd.toLocaleDateString()
    return date
  }
  return (
    <Events>
      <Grid>
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
                    
                    
                    <Row className='introduction'>
                      <Col xs={12} lg={8}>
                      { item.images.length !== 0 && item.images[0].url !== undefined &&
                        
                        
                        <LazyLoad offset={0} className='lazyload__image--height'>
                          <Image backgroundURL={`https://www.nps.gov${item.images[0].url}` } className='lazyload__image--height' />
                        </LazyLoad>
                      }
                        <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                      </Col>
                      <Col xs={12} lg={4}>
                        <h4>Event Information</h4>
                        <Row>
                          <Col xs={12} sm={6}>
                          { item.times[0] !== undefined && item.times.length[0] !== 0 &&
                          <>
                            <h5>Time</h5>
                            <p>{item.times[0].timestart}–{item.times[0].timeend}</p> 
                          </>
                          }
                          
                          
                          <h5>Location</h5>
                          <p>{item.location}</p>
                          <h5>Cost: </h5> 
                          <p>{ item.isfree === 'false' 
                            ? item.feeinfo 
                            : item.feeinfo.length !== 0 && item.isfree === true 
                              ? 'FREE (' + item.feeinfo + ')' 
                              : 'FREE' 
                            }
                          </p> 

                            {item.contactname !== '' &&
                              <>
                                <h5>Contact</h5>
                                <p>{item.contactname}</p>
                              </>
                            }

                            {item.contacttelephonenumber !== '' &&
                              <Phone
                                title='Telephone'
                                phoneNumber={item.contacttelephonenumber} />
                            }

                            {item.contactemailaddress !== '' &&
                              <Email 
                                title={`Email Address`}
                                emailAddress={item.contactemailaddress} />
                            }

                            
                          </Col>
                          <Col xs={12} sm={6}>
                            
                            <h5>Dates</h5>
                            <DayPicker showOutsideDays fixedWeeks
                              initialMonth={new Date(new Date(item.dates[0]).getFullYear(), new Date(item.dates[0]).getMonth())}
                              selectedDays={ item.dates.map((date) => new Date(date))}
                            />
                              
                            { item.regresinfo !== '' &&
                              <p><strong>Reservations: </strong>{item.regresinfo}
                              { item.regresurl !== '' &&
                                <strong> <a href={item.regresurl} target='_blank'>Click here for reservations.</a></strong>
                              }
                            </p> 
                            }
                            {item.infourl !== '' &&
                              <>
                                <h5>More Info</h5>
                                <p><a href={item.infourl} target='_blank'>{item.infourl}</a></p> 
                              </>
                            }
                            
                          </Col>
                        </Row>
                        <div className='details'>
                          {/* <h3>{item.types.join(', ')}</h3> */}
                          
                          
                          
                          
                          
                          
                        

                          
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
      </Grid>  
    </Events>
  )
}
  
export default Component

const Events = styled.div`
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 22rem;
    ${SuperQuery().minWidth.md.css`
      height: 30rem;
    `}
  }
  ${'' /* .details {
    background-color: ${({ theme }) => theme.colors.box_background};
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    margin: 0.5rem -0.75rem;
    ${SuperQuery().minWidth.sm.css`
      padding: 1rem;
      margin: 1rem 0rem;
    `}
  } */}
  .details {
    background-color: ${({ theme }) => theme.colors.box_background};
    padding: 1rem 0.875rem 1rem 0.875rem;
    margin: 1rem -0.875rem 0.5rem -0.875rem;
    column-count: 1;
    ${SuperQuery().minWidth.md.css`
      padding: 2rem 0.75rem 0rem 0.75rem;
      margin: 1rem -0.75rem 0.5rem -0.75rem;
      column-count: 2;
    `}
    ${SuperQuery().minWidth.lg.css`
      padding: 1rem 0.75rem 1rem 0.75rem;
      margin: 1rem 0;
      column-count: 1;
    `}
  }
/* DayPicker styles */

.DayPicker {
  display: inline-block;
  font-size: 1.25rem;
  margin: 0 0 0 -1.625rem;
  min-width: 90%;

  ${SuperQuery().minWidth.md.css`
    font-size: 1rem;
    margin: 0;
  `}

}

.DayPicker-wrapper {
  position: relative;

  flex-direction: row;
  padding-bottom: 1em;

  -webkit-user-select: none;

     -moz-user-select: none;

      -ms-user-select: none;

          user-select: none;
}

.DayPicker-Months {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.DayPicker-Month {
  display: table;
  margin: 0 1em;
  margin-top: 1em;
  border-spacing: 0;
  border-collapse: collapse;

  -webkit-user-select: none;

     -moz-user-select: none;

      -ms-user-select: none;

          user-select: none;
}

.DayPicker-NavBar {
}

.DayPicker-NavButton {
  position: absolute;
  top: 1em;
  right: 1.5em;
  left: auto;

  display: inline-block;
  margin-top: 2px;
  width: 1.25em;
  height: 1.25em;
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  color: #8B9898;
  cursor: pointer;
}

.DayPicker-NavButton:hover {
  opacity: 0.8;
}

.DayPicker-NavButton--prev {
  margin-right: 1.5em;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
}

.DayPicker-NavButton--next {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
}

.DayPicker-NavButton--interactionDisabled {
  display: none;
}

.DayPicker-Caption {
  display: table-caption;
  margin-bottom: 0.5em;
  padding: 0 0.5em;
  text-align: left;
}

.DayPicker-Caption > div {
  font-weight: 500;
  font-size: 1.15em;
}

.DayPicker-Weekdays {
  display: table-header-group;
  margin-top: 1em;
}

.DayPicker-WeekdaysRow {
  display: table-row;
}

.DayPicker-Weekday {
  display: table-cell;
  padding: 0.5em;
  color: #8B9898;
  text-align: center;
  font-size: 0.875em;
}

.DayPicker-Weekday abbr[title] {
  border-bottom: none;
  text-decoration: none;
}

.DayPicker-Body {
  display: table-row-group;
}

.DayPicker-Week {
  display: table-row;
}

.DayPicker-Day {
  display: table-cell;
  padding: 0.5em;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
}

.DayPicker-WeekNumber {
  display: table-cell;
  padding: 0.5em;
  min-width: 1.25em;
  border-right: 1px solid #EAECEC;
  color: #8B9898;
  vertical-align: middle;
  text-align: right;
  font-size: 0.75em;
  cursor: pointer;
}

.DayPicker--interactionDisabled .DayPicker-Day {
  cursor: default;
}

.DayPicker-Footer {
  padding-top: 0.5em;
}

.DayPicker-TodayButton {
  border: none;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  color: #4A90E2;
  font-size: 0.875em;
  cursor: pointer;
}

/* Default modifiers */

.DayPicker-Day--today {
  color: #D0021B;
  font-weight: 700;
}

.DayPicker-Day--outside {
  color: #8B9898;
  cursor: default;
}

.DayPicker-Day--disabled {
  color: #DCE0E0;
  cursor: default;
  /* background-color: #eff1f1; */
}

/* Example modifiers */

.DayPicker-Day--sunday {
  background-color: #F7F8F8;
}

.DayPicker-Day--sunday:not(.DayPicker-Day--today) {
  color: #DCE0E0;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
  position: relative;

  background-color: #4A90E2;
  color: #F0F8FF;
}

.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
  background-color: #51A0FA;
}

.DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  background-color: #F0F8FF;
}

/* DayPickerInput */

.DayPickerInput {
  display: inline-block;
}

.DayPickerInput-OverlayWrapper {
  position: relative;
}

.DayPickerInput-Overlay {
  position: absolute;
  left: 0;
  z-index: 1;

  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  margin: 1rem 0 0 0;
  padding: 0;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`
