import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Flex justify='space-between' w='100vw' px='40' py='2'>
      <Box>
        <Link to="/"> home </Link>
      </Box>
      <Spacer />
      <Box>
        <Link to="/conference"> conferences </Link>
        <Link to="/conference"> rankings </Link>
      </Box>
    </Flex>
  )
}

export default Navbar
