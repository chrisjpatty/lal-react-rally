import React from 'react'
import styled from '@emotion/styled'

export default ({ children, big }) => (
  <Wrapper big={big}>
    {children}
  </Wrapper>
)

const Wrapper = styled('strong')({
  fontWeight: 'bold'
}, ({theme, big}) => ({
  color: theme.primary.color,
  fontSize: big ? '4vw' : ''
}))
