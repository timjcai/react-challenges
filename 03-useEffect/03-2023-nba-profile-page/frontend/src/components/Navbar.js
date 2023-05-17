import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Flex justify='space-between' w='60vw' py='2'>
      <Box>
        <Link to="/"> home </Link>
      </Box>
      <Spacer />
      <Flex gap='20px'>
        <Link to="/conference"> conferences </Link>
        <Link to="/rankings"> rankings </Link>
      </Flex>
    </Flex>
  )
}

export default Navbar
