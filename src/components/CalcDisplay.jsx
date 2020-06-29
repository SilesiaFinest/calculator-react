import React from "react";

import styled from "styled-components";

const StyledDisplay = styled.div`
  background: rgb(29, 30, 31);
  border: none;
  margin: 0;
  padding: 0;
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const StyledInput = styled.p`
  color: rgb(225, 122, 141);
  margin: 20px 20px 0px 10px;
  font-weight: 700;
  font-size: 0.8rem;
`;

const StyledResult = styled.h2`
  color: white;
  margin: 0 20px 5px 0;
  font-weight: 300;
  font-size: 2rem;
`;

const CalcDisplay = ({ input, result }) => (
  <StyledDisplay>
    <StyledInput>{input}</StyledInput>
    <StyledResult>{result}</StyledResult>
  </StyledDisplay>
);

export default CalcDisplay;
