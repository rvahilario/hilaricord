import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import FontStyles from '../styles/fontStyles';

import theme from '../styles/themes/spartan';

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <FontStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
