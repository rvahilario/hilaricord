import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import FontStyles from '../src/styles/fontStyles';

import theme from '../src/styles/themes/spartan';

export default function CustomApp({ Component, pageProps }) {
  console.log('Roda em todas as páginas!');
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
