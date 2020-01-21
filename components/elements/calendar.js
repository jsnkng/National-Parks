import React from 'react'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import DayPicker from 'react-day-picker'

const Component = ({ dates }) => {
  return (
    <Calendar 
      initialMonth={new Date(new Date(dates[0]).getFullYear(), new Date(dates[0]).getMonth())}
      selectedDays={ dates.map((date) => new Date(date))}
    />
  )
}
  
export default Component

const Calendar = styled(DayPicker)`
  .DayPicker {
    display: block;
    margin: 0;
    font-size: 1rem;
  }
  .DayPicker-wrapper {
    position: relative;
    flex-direction: row;
    user-select: none;
  }
  .DayPicker-Months {
  }
  .DayPicker-Month {
    display: table;
    margin: 0 0 1rem 0;
    border-spacing: 0;
    border-collapse: collapse;
    user-select: none;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }
  .DayPicker-NavBar {
    position:relative;
  }
  .DayPicker-NavButton {
    display:none;
    position: absolute;
    top: 0.125rem;
    right: 0.5rem;
    left: auto;
    margin-top: 2px;
    width: 1.25rem;
    height: 1.25rem;
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
    margin-right: 1.5rem;
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
    margin-bottom: 0.125rem;
    text-align: left;
  }
  .DayPicker-Caption > div {
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.375rem;
  }
  .DayPicker-Weekdays {
    display: table-header-group;
    margin-top: 1rem;
  }
  .DayPicker-WeekdaysRow {
    display: table-row;
    background-color: ${({ theme }) => theme.colors.box_background};
  }
  .DayPicker-Weekday {
    display: table-cell;
    padding: 0.25rem 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }
  .DayPicker-Body {
    display: table-row-group;
    background-color: ${({ theme }) => theme.colors.offbackground};
  }
  .DayPicker-Week {
    display: table-row;
  }
  .DayPicker-Day {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.colors.offbackground};
    font-size: 1.125rem;
    padding: 0.8rem;
    font-weight: 700;
    ${SuperQuery().maxWidth.of('360px').css`
      font-size: .925rem;
      padding: 0.5rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      font-size: .875rem;
      padding: 0.5rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 1rem;
      padding: 0.5rem 0.75rem;
    `}
  }
  .DayPicker-WeekNumber {
    display: table-cell;
    padding: 0.25rem 0.5rem;
    min-width: 1.25rem;
    border-right: 1px solid #EAECEC;
    color: #8B9898;
    vertical-align: middle;
    text-align: right;
    font-size: 0.75rem;
    cursor: pointer;
  }
  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }
  .DayPicker-Footer {
    padding-top: 0.5rem;
  }
  .DayPicker-TodayButton {
    border: none;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    color: #4A90E2;
    font-size: 0.875rem;
    cursor: pointer;
  }
  /* Default modifiers */
  .DayPicker-Day--today {
    font-weight: 700;
    font-size: 120%;
    padding:0;
    color: ${({ theme }) => theme.colors.box_background} !important;
    background-color: ${({ theme }) => theme.colors.text};
  }
  .DayPicker-Day--outside {
    color: #8B9898;
    cursor: default;
  }
  .DayPicker-Day--disabled {
    color: #DCE0E0;
    cursor: default;
    background-color: #eff1f1; 
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--today {
    font-weight: 700;
    font-size: 120%;
    padding:0;
    color: ${({ theme }) => theme.colors.text} !important;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    padding: 0.45rem;
    background-color: ${({ theme }) => theme.colors.color_two};
    color: #f1f1f1;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${({ theme }) => theme.colors.color_five};
  }
`