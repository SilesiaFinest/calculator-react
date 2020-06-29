import React from "react";
import Calculator from "./components/Calculator";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    background: rgb(135,74,215);
    background: linear-gradient(135deg, rgba(135,74,215,1) 0%, rgba(255,142,100,1) 100%) fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Calculator />
    </div>
  );
}

export default App;
