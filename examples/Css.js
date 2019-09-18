import React from "react";
import styled from "@emotion/styled";
import Center from "../components/Center";

export default ({ background, style = {}, text, interactive, extra }) => {
  const [color, setColor] = React.useState("blue");
  return (
    <Center>
      <Wrapper>
        <InteractiveButton
          text={text}
          background={background}
          style={style}
          interactive={interactive}
        />
        {
          extra &&
          <React.Fragment>
            <InteractiveButton
              text={text}
              background={background}
              style={style}
              interactive={interactive}
            />
            <InteractiveButton
              text={text}
              background={background}
              style={style}
              interactive={interactive}
            />
          </React.Fragment>
        }
      </Wrapper>
    </Center>
  );
};

const Wrapper = styled("div")`
  padding: 3vw 2vw;
  background: #fff;
  border-radius: 0.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled("button")`
  background: blue;
  border: none;
  border-radius: 0.4vw;
  color: #fff;
  padding: 0.3vw 1vw;
  font-size: 1.8vw;
  transition: background 500ms;
  margin: .5vw 0vw;
  outline: none;
`;

const InteractiveButton = ({ text, background, style, interactive }) => {
  const [color, setColor] = React.useState("blue");
  return (
    <Button
      style={{ background: background || color, ...style }}
      onClick={interactive ? () => setColor("red") : undefined}
    >
      {text || "Click to turn red"}
    </Button>
  );
};
