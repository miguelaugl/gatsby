import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #f6f6f6;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Roboto, sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
