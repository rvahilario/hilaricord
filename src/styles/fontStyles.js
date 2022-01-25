import { createGlobalStyle } from 'styled-components';
// import godOfWar from '../styles/themes/fonts/god-of-war.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'godOfWar';
    src: url('../styles/themes/fonts/god-of-war.ttf') format('truetype');
    /* font-weight: normal;
    font-style: normal; */
  }
`;

export default FontStyles;
