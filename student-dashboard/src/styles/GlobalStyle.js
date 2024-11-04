// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }
  
  body {
    background-color: #f5f5f5; /* Fond très léger */
    color: #333; /* Texte légèrement assombri pour la lisibilité */
  }

  h2 {
    font-size: 1.8em;
    color: #3c3c3c;
    margin-bottom: 0.8em;
    font-weight: 600;
  }

  p, li {
    font-size: 1em;
    line-height: 1.6;
    color: #4f4f4f;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
