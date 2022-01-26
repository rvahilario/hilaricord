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
    ></Box>
  );
}
