import React, { Fragment } from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react"

function Teamcard(props) {
  // const { name, id, slug, winsandlosses, conference } = props
  return (
    <Flex className="teamcard" key={props.id} boxShadow='outline' p='6' rounded='md' w='70vw' direction='column' justify='space-between' m='1em'>
      <Box>
      <Heading>{props.name}</Heading>
      </Box>
      <Flex className="team-details" justify='space-between'>
        <Text>{ props.slug }</Text>
        <Text>{ props.winsandlosses }</Text>
        <Text>{props.conference }</Text>
      </Flex>
    </Flex>
  );
  // return (
  //   <div key={ id }>
  //     <h2>{ name }</h2>
  //     <p>{ slug }</p>
  //     <p>{ winsandlosses }</p>
  //     <p>{conference }</p>
  //   </div>
  // );
}

export default Teamcard
