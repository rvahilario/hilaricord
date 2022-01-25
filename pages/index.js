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
          font-size: 22px;
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
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '600px',
            borderRadius: '10px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 50%)',
            backgroundColor: theme.colors.neutrals[700],
          }}
        >
          {/* Formulary */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <Title>Welcome back, Spartan!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: theme.colors.neutrals[300],
              }}
            >
              {theme.name}
            </Text>
            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: theme.colors.neutrals[200],
                  mainColor: theme.colors.neutrals[900],
                  mainColorHighlight: theme.colors.primary[500],
                  backgroundColor: theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="Enter"
              fullWidth
              buttonColors={{
                contrastColor: theme.colors.neutrals[50],
                mainColor: theme.colors.primary[600],
                mainColorLight: theme.colors.primary[500],
                mainColorStrong: theme.colors.primary[700],
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
