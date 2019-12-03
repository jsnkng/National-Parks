import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import states from './statesLookup'

const SelectState = () => {
  const handleSelectState = (e) => {
    Router.push(`/state/${e.target.value}`)
  }
  return (
    <SelectStateWrapper>
    <form id="simpleStateForm" onChange={handleSelectState}>
      Select a State:
      <select name="state" id="state">
        <option value="">None Selected</option>
        { Object.entries(states).map(([key, value]) => <option value={key}>{value}</option>)}
      </select>
    </form>
    </SelectStateWrapper>
  )
}

export default SelectState

const SelectStateWrapper = styled.div`
  select {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 97% 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-left:5px;
    text-align: left;
    white-space: nowrap;
    color:#737373;
    font-weight: bold;
    font-size:12px;
  }
`