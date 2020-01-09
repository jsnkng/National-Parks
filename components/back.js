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
  width: 3rem;
  height: 4rem;
`

const Arrow__Decorated = styled(Arrow)`
  position: absolute;
  top: 1rem;
  left: .125rem;
  width: 2rem;
  heigt: 2rem;
  fill: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  outline: none;
`