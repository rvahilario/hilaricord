import { createGlobalStyle } from 'styled-components';
// import godOfWar from '../styles/themes/fonts/god-of-war.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'godOfWar';
    src: url(../styles/themes/fonts/god-of-war.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.neutrals[900]};
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary[50]};
    font-family: 'Open Sans', sans-serif;

  }

  html, body, #__next {
        min-height: 100vh;
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
