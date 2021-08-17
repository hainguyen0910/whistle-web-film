import React from 'react';
import {
  Box,
  Button,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ isSelected, children }) {
  return (
    <Box
      m="2rem 1rem"
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius="xl"
      bgGradient={isSelected && 'linear(to-r, teal.300,green.200)'}
      color={isSelected && 'white'}
      zIndex="1"
      cursor="pointer"
    >
      {children}
    </Box>
  );
}

const ServicePack = (props) => {
  const { title, price, unit, features, isSelected, setIsSelected, keyIndex } =
    props;

  return (
    <PriceWrapper isSelected={isSelected}>
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl">
          {title}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" fontWeight="600">
            $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            {price}
          </Text>
          <Text fontSize="3xl" color="gray.500">
            /{unit}
          </Text>
        </HStack>
      </Box>
      <VStack py={4} borderBottomRadius="xl">
        <List spacing={3} textAlign="start" px={12}>
          {features?.map((item, index) => (
            <ListItem key={index}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {item}
            </ListItem>
          ))}
        </List>
        <Box w="80%" pt={7}>
          <Button
            w="full"
            colorScheme="green"
            variant="outline"
            onClick={() => setIsSelected(keyIndex)}
          >
            {isSelected ? <Icon as={FaCheckCircle} w={6} h={6} /> : 'Choose'}
          </Button>
        </Box>
      </VStack>
    </PriceWrapper>
  );
};

export default ServicePack;
