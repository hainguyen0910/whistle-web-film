import {
  Box,
  Container,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  Text,
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
    <Box color="gray.500">
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
