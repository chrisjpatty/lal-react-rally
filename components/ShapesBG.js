import React, { useRef } from "react";
import { TweenMax, Power1 } from 'gsap/TweenMax'

const ShapesBG = props => {
  const shape = useRef();
  const shape1 = useRef();
  const shape2 = useRef();
  const shape3 = useRef();
  const shape4 = useRef();
  const shape5 = useRef();
  const shape6 = useRef();
  const shape7 = useRef();
  const shape8 = useRef();
  const shape9 = useRef();
  const shape10 = useRef();
  const shape11 = useRef();
  const shape12 = useRef();

  const animate = () => {
    TweenMax.to(shape.current, 3, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape1.current, 2.8, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape2.current, 2, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape3.current, 1.5, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape4.current, 2.4, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape5.current, 3.5, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape6.current, 4, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape7.current, 3.2, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape8.current, 1.3, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape9.current, 2.2, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape10.current, 1.7, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape11.current, 3.2, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
    TweenMax.to(shape12.current, 2.4, {y: 50, ease: Power1.easeInOut}).yoyo(true).repeat(-1).startTime(-15)
  }

  React.useEffect(() => {
    animate()
  }, [])

  return (
    <svg viewBox="0 0 1920 1080" {...props} style={{position: 'fixed', left: 0,
    top: '-2%', width: '100%'}}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M198 954a60 60 0 1160-60 60.07 60.07 0 01-60 60zm0-110a50 50 0 1050 50 50.06 50.06 0 00-50-50z"
            fill="#27ffb7"
            ref={shape}
          />
          <path
            d="M1024 863a48 48 0 1148-48 48.05 48.05 0 01-48 48zm0-86a38 38 0 1038 38 38 38 0 00-38-38z"
            fill="#a629ff"
            ref={shape1}
          />
          <path
            d="M1673 777a57 57 0 1157-57 57.06 57.06 0 01-57 57zm0-104a47 47 0 1047 47 47 47 0 00-47-47z"
            fill="#29a9ff"
            ref={shape2}
          />
          <path
            d="M479.5 141a40.5 40.5 0 1140.5-40.5 40.55 40.55 0 01-40.5 40.5zm0-71a30.5 30.5 0 1030.5 30.5A30.53 30.53 0 00479.5 70zM349 441a51 51 0 1151-51 51.06 51.06 0 01-51 51zm0-92a41 41 0 1041 41 41 41 0 00-41-41z"
            fill="#27ffb7"
            ref={shape3}
          />
          <path
            d="M127.56 250.33a5 5 0 01-4.79-6.44l35.94-119.41a5 5 0 018.43-2l85.45 90.83a5 5 0 01-2.5 8.3L128.7 250.2a4.92 4.92 0 01-1.14.13zm38.23-114.68l-30.95 102.83 104.53-24.61zM1437.55 216.12a4.91 4.91 0 01-1.68-.29l-79.47-28.36a5 5 0 01-1.56-8.52l64.29-54.64a5 5 0 018.16 2.91l15.18 83a5 5 0 01-4.92 5.9zM1367.91 181l63.17 22.54-12.07-66zM435.54 851.33a5 5 0 01-4.9-6l17.24-82.6a5 5 0 018.22-2.73l62.9 56.22a5 5 0 01-1.77 8.48l-80.13 26.38a5.24 5.24 0 01-1.56.25zm20.36-78.11l-13.7 65.65 63.7-21zM951 209.11a4.86 4.86 0 01-1.45-.22l-116.24-35.11a5 5 0 01-2-8.44l88.52-83.08a5 5 0 018.29 2.5L955.84 203a5 5 0 01-4.87 6.14zm-106.48-42.4l99.64 30.11-23.78-101.34z"
            fill="#a629ff"
            ref={shape4}
          />
          <path
            d="M781.08 991.79a3.52 3.52 0 01-.56 0 5 5 0 01-4-3l-61.17-140.28a5 5 0 015.15-7l152 17.18a5 5 0 013.46 7.94L785.1 989.76a5 5 0 01-4.02 2.03zM728 852.46l54.2 124.39 80.62-109.15z"
            fill="#27ffb7"
            ref={shape5}
          />
          <path
            d="M1562.37 402.3a5 5 0 01-4.9-6l25.29-121.2a5 5 0 018.23-2.71l92.32 82.5a5 5 0 01-1.77 8.48l-117.61 38.7a4.94 4.94 0 01-1.56.23zm28.41-116.7L1569 389.84l101.16-33.28z"
            fill="#29a9ff"
            ref={shape6}
          />
          <path
            d="M1799 1013a49 49 0 1149-49 49.05 49.05 0 01-49 49zm0-88a39 39 0 1039 39 39.05 39.05 0 00-39-39z"
            fill="#27ffb7"
            ref={shape7}
          />
          <path
            d="M1717 202a49 49 0 1149-49 49.05 49.05 0 01-49 49zm0-88a39 39 0 1039 39 39.05 39.05 0 00-39-39z"
            fill="#a629ff"
            ref={shape8}
          />
          <path
            d="M649.5 337.27a5 5 0 01-1.83-.35 5 5 0 01-2.75-2.66l-40-91.78a5 5 0 012.59-6.59l91.78-40a5 5 0 016.59 2.59l40 91.79a5 5 0 01-2.58 6.58l-91.79 40a5 5 0 01-2.01.42zm-33.43-94.21l36 82.63 82.62-36-36-82.62zM162.84 631.26a5.15 5.15 0 01-1.22-.15l-93.1-23.42a5 5 0 01-3.63-6.07l23.42-93.1a5 5 0 016.07-3.63l93.1 23.42a5 5 0 013.63 6.07l-23.42 93.1a5 5 0 01-4.85 3.78zm-87-32l83.4 21 21-83.4-83.4-21zM1161.59 989.72a5 5 0 01-4.95-4.34l-10.77-80.85a5 5 0 014.3-5.61l80.52-10.73a5 5 0 015.62 4.29l10.77 80.85a5 5 0 01-4.29 5.62l-80.53 10.73a5 5 0 01-.67.04zm-5.15-81.55l9.45 70.94 70.62-9.41-9.45-70.94z"
            fill="#29a9ff"
            ref={shape9}
          />
          <path
            d="M1764.59 572.72a5 5 0 01-4.95-4.34l-10.77-80.85a5 5 0 014.3-5.61l80.52-10.73a5 5 0 015.62 4.29l10.77 80.85a5 5 0 01-4.29 5.62l-80.53 10.73a5 5 0 01-.67.04zm-5.15-81.55l9.45 70.94 70.62-9.41-9.45-70.94zM1243.7 289.75h-.27l-75.43-4.06a5 5 0 01-4.72-5.26l4-75.45a5 5 0 015.26-4.72l75.45 4.05a5 5 0 014.72 5.26l-4 75.45a5 5 0 01-5 4.73zM1173.51 276l65.47 3.52 3.51-65.46-65.49-3.55z"
            fill="#27ffb7"
            ref={shape10}
          />
          <path
            d="M1501.34 1013.41a5 5 0 01-3-1l-109.76-81.06a5 5 0 01-1-7l81.06-109.76a5 5 0 017-1l109.76 81.06a5 5 0 011 7l-81.06 109.76a5 5 0 01-4 2zm-102.75-87.12l101.7 75.12 75.12-101.7-101.7-75.12z"
            fill="#a629ff"
            ref={shape11}
          />
          <path
            d="M557 1012a40 40 0 1140-40 40 40 0 01-40 40zm0-70a30 30 0 1030 30 30 30 0 00-30-30zM1111.5 114a36.5 36.5 0 1136.5-36.5 36.54 36.54 0 01-36.5 36.5zm0-63a26.5 26.5 0 1026.5 26.5 26.53 26.53 0 00-26.5-26.5z"
            fill="#29a9ff"
            ref={shape12}
          />
          <path fill="none" d="M0 0h1920v1080H0z" />
        </g>
      </g>
    </svg>
  );
};

export default ShapesBG;
