import React from "react";
import * as bcgrColor from "./buttonColors";

import styled from "styled-components";

const StyledButton = styled.button`
  height: 100%;
  width: 100%;
  background: rgb(241, 242, 243);
  border: none;
  flex: ${({ double }) => (double ? 2 : 1)};
  background: ${({ color }) => bcgrColor[color]};
  color: ${({ operator }) => (operator ? "white" : "black")};
  cursor: pointer;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: inset 0 0 20px
        ${({ operator }) =>
          operator ? "rgba(255, 255, 255, 0.5)" : "rgba(10,10,10,0.2)"},
      0 0 20px rgba(255, 255, 255, 0.2);
    text-shadow: 1px 1px 2px #427388;
  }
`;

const Button = ({ double, children, color, handleClick, operator }) => {
  console.log(1);
  return (
    <StyledButton
      double={double}
      color={color}
      operator={operator}
      onClick={() => handleClick(children)}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
