import {
  Box,
  Container,
  Divider,
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import AppStoreBadge from './AppStoreBadge';
import CHPlayStoreBadge from './CHPlayStoreBadge';
import SocialButton from './SocialButton';

function ListHeader({ children }) {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  );
}

function Footer() {
  return (
    // <Flex
    //   p="4.375em 2.5em"
    //   m="0 auto"
    //   color="gray.500"
    //   justify="center"
    //   alignItems="center"
    // >
    //   <Box maxW="1000px">
    //     <Link href="/">Questions? Contact us.</Link>
    //     <Flex alignItems="center">
    //       <List spacing={5} mr={10}>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">FAQ</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Help Center</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Account</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Media Center</Link>
    //         </ListItem>
    //       </List>

    //       <List spacing={5} mr={10}>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Investor Relations</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Jobs</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Privacy</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Speed Test</Link>
    //         </ListItem>
    //       </List>

    //       <List spacing={5}>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Cookie Preferences</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Corporate Information</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Contact Us</Link>
    //         </ListItem>
    //         <ListItem>
    //           <ListIcon as={MdCheckCircle} color="green.500" />
    //           <Link href="/">Contact Us</Link>
    //         </ListItem>
    //       </List>
    //     </Flex>
    //     <Divider mt={10} />
    //   </Box>
    // </Flex>
    <Box
      // bg={useColorModeValue('gray.50', 'gray.900')}
      // color={useColorModeValue('gray.700', 'gray.200')}
      color="gray.500"
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href="/">About Us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Contact Us</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href="/">Help Center</Link>
            <Link href="/">Safety Center</Link>
            <Link href="/">Community Guidelines</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Legal</ListHeader>
            <Link href="/">Cookies Policy</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Law Enforcement</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Install App</ListHeader>
            <AppStoreBadge />
            <CHPlayStoreBadge />
          </Stack>
        </SimpleGrid>
      </Container>

      <Divider />

      <Box>
        <Container
          as={Stack}
          maxW="6xl"
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2021 Copy Templates from Chakra Templates.</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="Github" href="/">
              <FaGithub />
            </SocialButton>
            <SocialButton label="Facebook" href="/">
              <FaFacebook />
            </SocialButton>
            <SocialButton label="LinkedIn" href="/">
              <FaLinkedin />
            </SocialButton>
            <SocialButton label="Twitter" href="/">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="YouTube" href="/">
              <FaYoutube />
            </SocialButton>
            <SocialButton label="Instagram" href="/">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
