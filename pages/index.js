import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/global';
import spartan from '../src/styles/themes/spartan';

function Title(props) {
  return <h1>{props.children}</h1>;
}

export default function HomePage() {
  return (
    <ThemeProvider theme={spartan}>
      <main>
        <Title>Welcome to the jungle!</Title>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}
