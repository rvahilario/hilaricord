import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import supabase from '../client';

import { UserProvider } from '@auth0/nextjs-auth0';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import FontStyles from '../styles/fontStyles';
import theme from '../styles/themes/spartan';

export default function CustomApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <FontStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
