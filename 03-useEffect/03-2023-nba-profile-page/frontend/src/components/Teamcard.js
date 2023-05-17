import React from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import {fill} from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';


function Teamcard(props) {
  const slug = props.slug
  const myImage = new CloudinaryImage(`nba-api/${slug}`, {cloudName: 'dhxonutdu'}).resize(fill().width(200).height(170));

  // const { name, id, slug, winsandlosses, conference } = props
  return (
    <Flex className="teamcard" key={props.id} boxShadow='outline' p='6' rounded='md' w='60vw' direction='row' justify='left' gap='5vw'm='1em'>
      <Box>
        <AdvancedImage cldImg={myImage} />
      </Box>
      <Flex justify='space-between' direction='column'>
        <Flex direction='row' gap='20px'>
          <Heading size='xl'>{props.name}</Heading>
          <Text>({ props.slug })</Text>
        </Flex>

        <Flex className="team-details" justify='space-between'>
          <Text>{ props.winsandlosses }</Text>
          <Text>{ props.conference }</Text>
        </Flex>
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
