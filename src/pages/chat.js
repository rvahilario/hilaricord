import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useState } from 'react';
import theme from '../styles/themes/spartan';

export default function ChatPage() {
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary[500],
        backgroundImage: `url(${theme.backgroundImage.chat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: theme.colors.neutrals[50],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '80vw',
          maxHeight: '80vh',
          padding: '32px',
        }}
      >
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '90%',
            backgroundColor: theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        ></Box>
      </Box>
    </Box>
  );
}
