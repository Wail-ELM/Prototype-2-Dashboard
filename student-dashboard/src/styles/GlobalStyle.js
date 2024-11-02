// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: #e0e0e0;
  }

  p, li {
    font-size: 1em;
    line-height: 1.6;
    color: #b0b0b0;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
