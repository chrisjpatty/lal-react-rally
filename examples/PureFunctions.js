import React from 'react'
import styled from '@emotion/styled'

export default ({todos, small}) => {
  return (
    <PageWrapper>
      <Wrapper small={small}>
        <Title>My Todos</Title>
        {
          todos.map(todo => (
            <Todo small={small} style={{textDecoration: todo.done ? 'line-through' : 'none'}}><Checkbox checked={todo.done} />{todo.text}</Todo>
          ))
        }
      </Wrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 1vw;
  padding: ${({small}) => small ? "1vw" : "2vw"};
`

const Title = styled('h1')`
  font-size: 3vw;
  text-align: center;
  width: 100%;
  margin: 0px;
  margin-bottom: 15px;
  color: rgb(74, 64, 83);
`

const Todo = styled('div')`
  margin: 1vw 0vw;
  padding: 1vw;
  background: rgb(220, 214, 227);
  border-radius: .5vw;
  width: 100%;
  color: rgb(74, 64, 83);
  text-align: left;
  display: flex;
  align-items: center;
  font-size: ${({small}) => small ? '1.2vw' : ''};
`

const Checkbox = styled('div')`
  width: 2vw;
  height: 2vw;
  background: #fff;
  border-radius: .2vw;
  margin-right: 1vw;
  position: relative;
  flex: 0 0 auto;
  &::before{
    display: ${({checked}) => checked ? 'block' : 'none'};
    content: "";
    position: absolute;
    left: .4vw;
    top: .4vw;
    width: 1.2vw;
    height: 1.2vw;
    background: ${({theme}) => theme.primary.color}
  }
`
