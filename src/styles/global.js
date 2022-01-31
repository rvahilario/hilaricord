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
    background-color: ${theme.colors.neutrals._900};
    font-size: 14px;
    color: ${theme.colors.primary._50};
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #__next {
        min-height: 100%;
        min-width: 380px;
        display: flex;
        flex: 1;
      /* App fit Height */
    }

  h3 {
    font-size: 14px;
    /* margin-bottom: 6px; */
  }

  h4 {
    font-size: 12px;
    margin-top: 6px;
  }

  #__next {
    flex: 1;
  }

  #__next > * {
    flex: 1;
  }

  /* ./App fit Height */
`;
