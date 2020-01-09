import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ manageHistory }) => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <Back onClick={() => manageHistory()}>
      <Arrow__Decorated />
    </Back>
  )
}

export default Component

const Back = styled.div`
  width: 3em;
  height: 4em;
`

const Arrow__Decorated = styled(Arrow)`
  position: absolute;
  top: 1em;
  left: .125em;
  width: 2em;
  heigt: 2em;
  fill: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  outline: none;
`