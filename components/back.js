import React from 'react'
import styled from 'styled-components'
import {ArrowBackIos} from 'styled-icons/material/ArrowBackIos'
import { useRouter } from 'next/router'

const Component = ({ manageHistory }) => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <Back onClick={() => manageHistory()}>
      <ArrowBackIos />
    </Back>
  )
}

export default Component

const Back = styled.div`
  width: 3em;
  height: 4em;
  padding: .625em 0 0 .375em;
`
