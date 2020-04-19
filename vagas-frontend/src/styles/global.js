import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: #edf5ff;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

export default GlobalStyle;
