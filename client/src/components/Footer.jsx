import {
  Box,
  Divider,
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

function Footer() {
  return (
    <Flex
      p="4.375em 2.5em"
      m="0 auto"
      color="gray.500"
      justify="center"
      alignItems="center"
    >
      <Box maxW="1000px">
        <Link href="/">Questions? Contact us.</Link>
        <Flex alignItems="center">
          <List spacing={5} mr={10}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">FAQ</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Help Center</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Account</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Media Center</Link>
            </ListItem>
          </List>

          <List spacing={5} mr={10}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Investor Relations</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Jobs</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Privacy</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Speed Test</Link>
            </ListItem>
          </List>

          <List spacing={5}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Cookie Preferences</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Corporate Information</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Contact Us</Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Link href="/">Contact Us</Link>
            </ListItem>
          </List>
        </Flex>
        <Divider mt={10} />
      </Box>
    </Flex>
  );
}

export default Footer;
