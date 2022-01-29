import { createGlobalStyle } from 'styled-components';
import theme from './themes/spartan';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${theme.colors.neutrals[900]};
    font-size: 14px;
    color: ${theme.colors.primary[50]};
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #__next {
        min-height: 100%;
        min-width: 220px;
        display: flex;
        flex: 1;
      /* App fit Height */
    }

  #__next {
    flex: 1;
  }

  #__next > * {
    flex: 1;
  }

  /* ./App fit Height */
`;
