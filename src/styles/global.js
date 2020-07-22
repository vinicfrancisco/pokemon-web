import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    outline: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.softBlack};
    color: ${colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto-Slab', serif;
    font-size: 16px;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  button {
    cursor: pointer;
  }
`;
