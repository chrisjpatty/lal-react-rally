import React from "react";
import styled from "@emotion/styled";
import usePageProgress from "../hooks/usePageProgress";
import { useSpring, useTrail, animated, interpolate } from "react-spring";

const remap = (value, low1, high1, low2, high2) =>
  low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default () => {
  const progress = usePageProgress();
  const circleProgress = clamp(remap(progress, 0, 0.5, 0, 1), 0, 1);
  const circle1Progress = clamp(remap(progress, 0.3, 0.65, 0, 1), 0, 1);
  const circle2Progress = clamp(remap(progress, 0.5, 0.75, 0, 1), 0, 1);
  const circleStyle = useSpring({ transform: `scale(${1 - circleProgress})` });
  const circle1Style = useSpring({
    transform: `scale(${1 - circle1Progress})`
  });
  const circle2Style = useSpring({
    transform: `scale(${1 - circle2Progress})`
  });
  const letterProgress = clamp(remap(progress, 0.5, .8, -10, 0), -10, 0);
  const letterScale = clamp(remap(progress, 0.7, .8, 0, 1), 0, 1);
  const trail = useTrail(7, { x: letterProgress, scale: letterScale });
  const letters = trail.map(({x, scale}, i) =>
    interpolate([x, scale], (o, oscale) => `translate(${(trail.length - i) * o}, 0) scale(${oscale})`)
  );
  return (
    <Wrapper>
      <style>
        {`
          *{
            overflow: unset !important;
          }
          .circle{
            width: 150vw;
            height: 150vw;
            border-radius: 100%;
            background: #93d500;
            position: fixed;
            left: -37.5vw;
            top: -47vw;
          }
          .white{
            background: #fff;
          }
        `}
      </style>
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 209.39 59.83"
        style={{width: '50vw', position: 'fixed', left: '25vw', top: '35vh'}}
      >
        <title>tecuity</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="Layer_1-2-2" data-name="Layer 1-2">
              <animated.g transform={letters[0]}>
                <path
                  d="M15.08,22.88V34.64a5.26,5.26,0,0,0,.85,3.25A3.67,3.67,0,0,0,19,39a9.51,9.51,0,0,0,1.6-.13,5.72,5.72,0,0,0,1.4-.39l.13,7.39a16.59,16.59,0,0,1-2.7.65,18.83,18.83,0,0,1-3.27.28,15.55,15.55,0,0,1-5.29-.8,8.14,8.14,0,0,1-3.42-2.2,8.69,8.69,0,0,1-1.86-3.46A16.56,16.56,0,0,1,5,35.86v-13H0V15.35H5V7.28H15.08v8.07h7.35v7.53Z"
                  style={{fill: '#3d4543'}}
                />
              </animated.g>
              <animated.g transform={letters[1]}>
                <path
                  d="M57.31,31.08v1.23a11.46,11.46,0,0,1-.06,1.17H34.57a5.29,5.29,0,0,0,.78,2.34,6.56,6.56,0,0,0,1.7,1.82,7.88,7.88,0,0,0,2.32,1.2,8.35,8.35,0,0,0,2.67.44,8.64,8.64,0,0,0,4.15-.9A8.17,8.17,0,0,0,49,36.07l7.16,4.44a14.46,14.46,0,0,1-5.81,4.84A19.55,19.55,0,0,1,42,47.05a20.33,20.33,0,0,1-6.7-1,16.32,16.32,0,0,1-5.5-3.15,14.57,14.57,0,0,1-3.71-5.08,16.9,16.9,0,0,1-1.35-6.91A17,17,0,0,1,26,24a15.24,15.24,0,0,1,3.58-5.18,16,16,0,0,1,5.34-3.3,18.7,18.7,0,0,1,6.66-1.17A17.21,17.21,0,0,1,48,15.51a13.86,13.86,0,0,1,5,3.3,15.13,15.13,0,0,1,3.23,5.24A19.77,19.77,0,0,1,57.31,31.08Zm-9.49-3.89a6,6,0,0,0-1.53-4.13,5.89,5.89,0,0,0-4.62-1.73,8,8,0,0,0-2.77.47,7.19,7.19,0,0,0-2.2,1.26,6.39,6.39,0,0,0-1.51,1.88,5.41,5.41,0,0,0-.62,2.25Z"
                  style={{fill: '#3d4543'}}
                />
              </animated.g>
              <animated.g transform={letters[2]}>
                <path
                  d="M84.38,25.28A6.35,6.35,0,0,0,82,23.49a7.63,7.63,0,0,0-3.08-.68,6.63,6.63,0,0,0-3,.65,7.25,7.25,0,0,0-2.27,1.73,8.2,8.2,0,0,0-1.47,2.5,8.56,8.56,0,0,0-.54,3,9,9,0,0,0,.51,3,7.43,7.43,0,0,0,1.47,2.5A7.11,7.11,0,0,0,76,37.92a7.27,7.27,0,0,0,3,.62,8.61,8.61,0,0,0,3.1-.54,5.89,5.89,0,0,0,2.48-1.69l5.72,6.84a13.66,13.66,0,0,1-5,2.9,20.11,20.11,0,0,1-6.53,1,20.91,20.91,0,0,1-6.93-1.11,16,16,0,0,1-5.58-3.24,15.24,15.24,0,0,1-3.73-5.15,16.43,16.43,0,0,1-1.36-6.84,16.36,16.36,0,0,1,1.36-6.79,15.34,15.34,0,0,1,3.73-5.15,16.59,16.59,0,0,1,5.58-3.26,20.24,20.24,0,0,1,6.86-1.14,18,18,0,0,1,3.36.31,22.25,22.25,0,0,1,3.21.83,15.69,15.69,0,0,1,2.83,1.29,12.29,12.29,0,0,1,2.23,1.7Z"
                  style={{fill: '#3d4543'}}
                />
              </animated.g>
              <animated.g transform={letters[3]}>
                <path
                  d="M115.58,46.06V41.8h-.12a8.79,8.79,0,0,1-1.48,2,9.34,9.34,0,0,1-2.14,1.6,13.23,13.23,0,0,1-2.7,1.11,10.91,10.91,0,0,1-3.11.43,11.48,11.48,0,0,1-5.31-1.11A10.18,10.18,0,0,1,97.2,43a11.24,11.24,0,0,1-2-4,17.44,17.44,0,0,1-.59-4.6v-19H105V32a15.71,15.71,0,0,0,.19,2.47,5.92,5.92,0,0,0,.73,2.09A3.8,3.8,0,0,0,107.35,38a4.45,4.45,0,0,0,2.32.53,4.72,4.72,0,0,0,4.12-2,7.71,7.71,0,0,0,1.41-4.62V15.35h10.31V46.06Z"
                  style={{fill: '#3d4543'}}
                />
              </animated.g>
              <animated.g transform={letters[4]}>
                <path
                  d="M144.27,5.55a5.32,5.32,0,0,1-.47,2.19,5.63,5.63,0,0,1-1.26,1.76,5.83,5.83,0,0,1-1.88,1.17,6.22,6.22,0,0,1-2.3.43,5.89,5.89,0,0,1-4.21-1.63,5.25,5.25,0,0,1-1.69-3.92,5.38,5.38,0,0,1,.44-2.13,5.1,5.1,0,0,1,1.25-1.76A7.09,7.09,0,0,1,136,.46,5.81,5.81,0,0,1,138.36,0a6.22,6.22,0,0,1,2.3.43,6,6,0,0,1,1.88,1.17,5.63,5.63,0,0,1,1.26,1.76A5.36,5.36,0,0,1,144.27,5.55ZM133.21,46.06V15.35h10.31V46.06Z"
                  style={{fill: '#93d500'}}
                />
              </animated.g>
              <animated.g transform={letters[5]}>
                <path
                  d="M162.26,22.88V34.64a5.26,5.26,0,0,0,.85,3.25,3.65,3.65,0,0,0,3,1.08,9.51,9.51,0,0,0,1.6-.13,5.73,5.73,0,0,0,1.41-.36l.13,7.39a16.59,16.59,0,0,1-2.7.65,18.83,18.83,0,0,1-3.27.28A15.51,15.51,0,0,1,158,46a8.14,8.14,0,0,1-3.42-2.23,8.69,8.69,0,0,1-1.86-3.46,16.53,16.53,0,0,1-.56-4.48v-13h-5V15.35h5V7.28h10.12v8.07h7.35v7.53Z"
                  style={{fill: '#93d500'}}
                />
              </animated.g>
              <animated.g transform={letters[6]}>
                <polygon
                  points="181.15 59.83 191.86 59.83 209.39 15.35 198.46 15.35 192.24 35.08 192.05 35.08 185.07 15.35 173.63 15.35 186.71 45.57 181.15 59.83"
                  style={{fill: '#3d4543'}}
                />
              </animated.g>
            </g>
          </g>
        </g>
      </animated.svg>
      <animated.div className="circle" style={circle2Style} />
      <animated.div className="circle white" style={circle1Style} />
      <animated.div className="circle" style={circleStyle} />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 1000vh;
  background: #fff;
  ${"" /* background: linear-gradient(#910fe2, #f76919); */};
`;
