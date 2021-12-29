import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Logo from '../components/Logo'

export function AuthpagesLayout({ children }) {
  return (
    <Box mb={16}>
      <Logo />
      <Container maxW='container.lg'>{children}</Container>
    </Box>
  )
}

