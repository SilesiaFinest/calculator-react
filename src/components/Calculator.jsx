import React, { useState } from "react";
import CalcDisplay from "./CalcDisplay";
import Button from "./Button";
import { evaluate } from "mathjs";

import styled from "styled-components";

const CalcWrapper = styled.div`
  width: 20vw;
  min-width: 260px;
  height: 70vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledButtonsGrid = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`;

const StyledRow = styled.div`
  display: flex;
  height: 20%;
`;

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const addToInput = (val) => {
    if (val === "x") {
      val = "*";
    } else if (val === ",") {
      val = ".";
    }
    if (isNaN(val) && isNaN(input[input.length - 1])) {
      setInput((prevState) => prevState);
    } else {
      setInput((prevState) => prevState + val);
    }
  };

  const changeSign = () => {
    if (result > 0) {
      setResult(Math.abs(result) * -1);
    } else if (result < 0) {
      setResult(Math.abs(result));
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const getResult = () => {
    if (isNaN(input[input.length - 1])) {
      setResult((prevState) => prevState);
    } else {
      setResult(evaluate(input));
    }
  };

  return (
    <div>
      <CalcWrapper>
        <CalcDisplay input={input} result={result} />
        <StyledButtonsGrid>
          <StyledRow>
            <Button handleClick={addToInput} color={"topRow"}>
              %
            </Button>
            <Button handleClick={changeSign} color={"topRow"}>
              <sup>+</sup>&#8260;<sub>&#8722;</sub>
            </Button>
            <Button handleClick={clearInput} color={"topRow"}>
              C
            </Button>
            <Button handleClick={addToInput} operator="true" color={"divide"}>
              /
            </Button>
          </StyledRow>
          <StyledRow>
            <Button handleClick={addToInput} color={"digits"}>
              7
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              8
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              9
            </Button>
            <Button handleClick={addToInput} operator="true" color={"multiply"}>
              x
            </Button>
          </StyledRow>
          <StyledRow>
            <Button handleClick={addToInput} color={"digits"}>
              4
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              5
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              6
            </Button>
            <Button handleClick={addToInput} operator="true" color={"minus"}>
              -
            </Button>
          </StyledRow>
          <StyledRow>
            <Button handleClick={addToInput} color={"digits"}>
              1
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              2
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              3
            </Button>
            <Button handleClick={addToInput} operator="true" color={"plus"}>
              +
            </Button>
          </StyledRow>
          <StyledRow>
            <Button handleClick={addToInput} color={"digits"}>
              0
            </Button>
            <Button handleClick={addToInput} color={"digits"}>
              ,
            </Button>
            <Button
              handleClick={getResult}
              double
              operator="true"
              color={"equal"}
            >
              =
            </Button>
          </StyledRow>
        </StyledButtonsGrid>
      </CalcWrapper>
    </div>
  );
};

export default Calculator;
