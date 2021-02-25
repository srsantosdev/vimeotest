import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    height: 100vh;
    background: #252525;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Montserrat', sans-serif;
    color: #edf6f9;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
