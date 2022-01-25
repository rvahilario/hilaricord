import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

import { ThemeProvider, useTheme } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/themes/spartan';

function Title(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${theme.colors.neutrals[50]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  const username = 'rvahilario';

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 200px',
          backgroundColor: theme.colors.neutrals[50],
          backgroundImage:
            'url(https://raw.githubusercontent.com/rvahilario/assets/main/hilaricord/images/old-kratos.jpg)',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      ></Box>
    </ThemeProvider>
  );
}
