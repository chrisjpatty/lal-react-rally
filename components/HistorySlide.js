import React from 'react'
import styled from '@emotion/styled'

export default () => {
  return (
    <Column>
      <Title>History of React</Title>
      <HistoryWrapper>
        <Event year="2011">Prototyped at Facebook by Jordan Walke</Event>
        <Event year="2011">Deployed in the Facebook Newsfeed</Event>
        <Event year="2013">Open-sourced at JSConf</Event>
        <Event year="2015">Netflix starts using React</Event>
        <Event year="2016">React gains mainstream adoption</Event>
        <Event year="2017">React Fiber is released</Event>
        <Event year="2018">React "Hooks" syntax is released</Event>
      </HistoryWrapper>
    </Column>
  )
}

const Column = styled('div')`
  display: flex;
  flex-direction: column;
`

const Title = styled('h1')`

`

const HistoryWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  border-left: .6vw solid ${({theme}) => theme.primary.color};
  padding: 2vw 0vw;
`

const Event = ({children, year}) => (
  <EventWrapper>
    {children}
    <Year>{year}</Year>
  </EventWrapper>
)

const EventWrapper = styled('div')`
  text-align: left;
  padding-left: 2vw;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    left: -1.4vw;
    top: .8vw;
    width: 3vh;
    height: 3vh;
    border-radius: 100%;
    background: ${({theme}) => theme.accent.color};
    border: .7vh solid ${({theme}) => theme.colors.background};
  }
`

const Year = styled('span')`
  position: absolute;
  left: -5vw;
  top: .5vw;
  color: #ffffff;
  font-size: 1.8vw;
`
