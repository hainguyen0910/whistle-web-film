import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { BsInfoCircleFill, BsPlayFill } from 'react-icons/bs';

function Featured(props) {
  const { item } = props;
  return (
    <Box {...props}>
      <Image src={item.imgTitle} />
      <Text>{item.desc}</Text>
      <Button
        variant="solid"
        colorScheme="green"
        leftIcon={<BsPlayFill />}
        size="md"
        mt="1rem"
      >
        Play
      </Button>
      <Button
        variant="outline"
        colorScheme="facebook"
        leftIcon={<BsInfoCircleFill />}
        size="md"
        mt="1rem"
        ml="1rem"
      >
        Info
      </Button>
    </Box>
  );
}

export default Featured;
