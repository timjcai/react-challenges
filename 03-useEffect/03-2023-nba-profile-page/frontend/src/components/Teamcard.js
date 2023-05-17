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
    <Flex className="teamcard" key={props.id} boxShadow='outline' p='6' rounded='md' w='45vw' direction='row' justify='space-around' m='1em'>
      <Box>
        <AdvancedImage cldImg={myImage} />
      </Box>
      <Flex justify='space-between' direction='column'>
        <Heading size='xl'>{props.name}</Heading>
        <Flex className="team-details" justify='space-between'>
          <Text>{ props.slug }</Text>
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
