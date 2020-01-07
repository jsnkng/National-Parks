import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import {ArrowBackIos} from 'styled-icons/material/ArrowBackIos'

import { useRouter } from 'next/router'
const Component = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <Back onClick={goBack}>
      <ArrowBackIos />
    </Back>
  )
}

export default Component

const Back = styled.div`
  width: 48px;
  padding: .25em;
`