import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global';
import dark from '../src/styles/themes/dark';

function Title(props) {
  return <h1>{props.children}</h1>;
}

export default function HomePage() {
  return (
    <ThemeProvider theme={dark}>
      <main>
        <Title>Welcome to the jungle!</Title>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}
