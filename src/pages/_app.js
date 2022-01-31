import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import supabase from '../client';
import Head from 'next/head';

import { UserProvider } from '@auth0/nextjs-auth0';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import FontStyles from '../styles/fontStyles';
import theme from '../styles/themes/spartan';

export default function CustomApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <GlobalStyle />
      <FontStyles />
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
