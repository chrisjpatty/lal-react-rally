import React from 'react'
import { useSteps } from "mdx-deck";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { animated, useTrail } from "react-spring";

export default () => {
  const step = useSteps(1);
  const config = { tension: 350, friction: 30 };
  const stack1Style = useTrail(16, {
    transform: `translateY(${step >= 1 ? 0 : -100}vh)`,
    config
  });

  return (
    <Stack>
      <Cell size={3} color={COLORS[5]} style={stack1Style[15]}>
        Input "v"
      </Cell>
      <Cell size={6} color={COLORS[4]} style={stack1Style[14]}>
        Final Paint
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[13]}>
        Input "e"
      </Cell>
      <Cell size={5} color={COLORS[3]} style={stack1Style[12]}>
        Calculate Layout
      </Cell>
      <Cell size={6} color={COLORS[2]} style={stack1Style[11]}>
        Async Call
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[10]}>
        Input "t"
      </Cell>
      <Cell size={4} color={COLORS[1]} style={stack1Style[9]}>
        Paint Loader
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[8]}>
        Input "S"
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[7]}>
        Input " "
      </Cell>
      <Cell size={6} color={COLORS[4]} style={stack1Style[6]}>
        Final Paint
      </Cell>
      <Cell size={5} color={COLORS[3]} style={stack1Style[5]}>
        Calculate Layout
      </Cell>
      <Cell size={6} color={COLORS[2]} style={stack1Style[4]}>
        Async Call
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[3]}>
        Input "t"
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[2]}>
        Input "a"
      </Cell>
      <Cell size={4} color={COLORS[1]} style={stack1Style[1]}>
        Paint Loader
      </Cell>
      <Cell size={3} color={COLORS[5]} style={stack1Style[0]}>
        Input "C"
      </Cell>
    </Stack>
  )
}

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

const Stack = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  flex-direction: column;
`;
