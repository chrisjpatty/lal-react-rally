import React from "react";
import { useSteps } from "mdx-deck";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { animated, useTrail, useTransition } from "react-spring";

export default () => {
  const step = useSteps(3);
  const config = { tension: 280, friction: 30 };
  const stack1Style = useTrail(5, {
    transform: `translateY(${step >= 1 ? 0 : -100}vh)`,
    config
  });
  const stack2Style = useTrail(5, {
    transform: `translateY(${step >= 2 ? 0 : -100}vh)`,
    config
  });
  const stack3Style = useTrail(5, {
    transform: `translateY(${step >= 3 ? 0 : -100}vh)`,
    config
  });
  const from = {
    width: "50%",
    padding: ".1vw 1.3vw",
    textAlign: "left",
    background: "#fff",
    borderRadius: ".5vw",
    margin: "1vw 0vw 0vw 0vw",
    transform: "translateY(5vw)",
    opacity: 0,
    color: "#000",
    height: "0vw",
    fontSize: '2vw',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  };
  const enter = { opacity: 1, transform: "translateY(0vw)", height: "4vw" };
  const leave = {
    opacity: 0,
    transform: "translateY(5vw)",
    height: "0vw",
    margin: 0
  };
  const resultStyle = useTransition(step === 1, null, {
    from,
    enter,
    leave
  });
  const result2Style = useTransition(step === 1 || step === 2, null, {
    from,
    enter,
    leave
  });
  const result3Style = useTransition(step === 1 || step === 2, null, {
    from,
    enter,
    leave
  });
  const result4Style = useTransition(step >= 2, null, {
    from,
    enter,
    leave
  });
  return (
    <Frame>
      <Left>
        <Title>Search for an artist</Title>
        <Input>
          {step >= 1 && "C"}
          {step >= 2 && "a"}
          {step >= 3 && "t"}
          <Blinker>|</Blinker>
        </Input>
        {resultStyle.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props} key={key}>
                Celine Dion
              </animated.div>
            )
        )}
        {result2Style.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props} key={key}>
                Camila Cabello
              </animated.div>
            )
        )}
        {result3Style.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props} key={key}>
                Calvin Harris
              </animated.div>
            )
        )}
        {result4Style.map(
          ({ item, props, key }) =>
            item && (
              <animated.div style={props} key={key}>
                Cat Stevens
              </animated.div>
            )
        )}
      </Left>
      <Right>
        <Stack>
          <Cell size={6} color={COLORS[4]} style={stack3Style[4]}>
            Final Paint
          </Cell>
          <Cell size={5} color={COLORS[3]} style={stack3Style[3]}>
            Calculate Layout
          </Cell>
          <Cell size={6} color={COLORS[2]} style={stack3Style[2]}>
            Async Call
          </Cell>
          <Cell size={4} color={COLORS[1]} style={stack3Style[1]}>
            Paint Loader
          </Cell>
          <Cell size={3} color={COLORS[5]} style={stack3Style[0]}>
            Input "t"
          </Cell>
          <Cell size={6} color={COLORS[4]} style={stack2Style[4]}>
            Final Paint
          </Cell>
          <Cell size={5} color={COLORS[3]} style={stack2Style[3]}>
            Calculate Layout
          </Cell>
          <Cell size={6} color={COLORS[2]} style={stack2Style[2]}>
            Async Call
          </Cell>
          <Cell size={4} color={COLORS[1]} style={stack2Style[1]}>
            Paint Loader
          </Cell>
          <Cell size={3} color={COLORS[5]} style={stack2Style[0]}>
            Input "a"
          </Cell>
          <Cell size={6} color={COLORS[4]} style={stack1Style[4]}>
            Final Paint
          </Cell>
          <Cell size={5} color={COLORS[3]} style={stack1Style[3]}>
            Calculate Layout
          </Cell>
          <Cell size={6} color={COLORS[2]} style={stack1Style[2]}>
            Async Call
          </Cell>
          <Cell size={4} color={COLORS[1]} style={stack1Style[1]}>
            Paint Loader
          </Cell>
          <Cell size={3} color={COLORS[5]} style={stack1Style[0]}>
            Input "C"
          </Cell>
        </Stack>
      </Right>
    </Frame>
  );
};

const COLORS = [
  "rgb(149, 84, 255)",
  "rgb(121, 31, 212)",
  "rgb(112, 30, 185)",
  "rgb(158, 75, 251)",
  "rgb(173, 112, 251)",
  "rgb(0, 205, 2)"
];

const Cell = ({ size, color, children, style }) => {
  return (
    <animated.div
      style={{
        height: `${size * 0.7}vw`,
        background: color,
        width: "100%",
        fontSize: "1.6vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style
      }}
    >
      {children}
    </animated.div>
  );
};

const Title = styled("h1")`
  font-size: 2vw;
  font-weight: 400;
  margin-bottom: 0vw;
  margin-top: 5vw;
  text-align: left;
  width: 60%;
`;

const Stack = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  flex-direction: column;
`;

const Frame = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Left = styled("div")`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled("div")`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled("div")`
  width: 60%;
  height: 8%;
  background: #fff;
  margin-top: 1.5%;
  border-radius: 0.5vw;
  color: #000;
  text-align: left;
  padding-left: 2%;
  display: flex;
  align-items: center;
`;

const blink = keyframes`
  0%{
    opacity: 0;
  }
  49%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
`;

const Blinker = styled("div")`
  animation: ${blink} 800ms infinite;
`;
