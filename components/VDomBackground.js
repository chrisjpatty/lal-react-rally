import React from 'react'
import styled from '@emotion/styled'

export default () => (
  <Wrapper>
    <Column style={{background: 'rgba(145, 34, 173, 0.2)'}}>
      <Text>Virtual DOM</Text>
    </Column>
    <Column style={{left: '50%'}}>
      <Text>Real DOM</Text>
    </Column>
  </Wrapper>
)

const Wrapper = styled('div')`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 80%;
  height: 100%;
`

const Column = styled('div')`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`

const Text = styled('h1')`
  width: 100%;
  font-size: 4vw;
  opacity: .8;
`
