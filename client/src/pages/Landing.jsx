import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import AppDownload from 'components/AppDownload';
import Logo from 'components/Logo';
import CustomModal from 'components/CustomModal';
import Footer from 'components/Footer';
import Background from 'assets/img/home_background.jpg';
import Video from 'assets/video/video-1.m4v';

const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box color="#fff" bg="#1a202c" overflow="hidden">
      <Flex
        justify="space-between"
        px={5}
        align="center"
        zIndex="1"
        position="relative"
      >
        <Logo />
        <Button colorScheme="teal" onClick={onOpen}>
          Sign In
        </Button>
      </Flex>
      <Box>
        {/* Area 1 */}
        <Box position="relative" p="50px 5%" bg="0 0" h="100vh">
          <Box
            position="absolute"
            top="-112px"
            bottom="0"
            right="0"
            left="0"
            overflow="hidden"
          >
            <Box position="absolute" top="0" bottom="0" right="0" left="0">
              <Image src={Background} boxSize="100%" objectFit="cover" />
              <Box
                bg="rgba(0,0,0,.4)"
                bgImage="linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)"
                position="absolute"
                top="0"
                bottom="0"
                right="0"
                left="0"
              />
            </Box>
          </Box>
          <Box
            position="relative"
            w="100%"
            textAlign="center"
            p="9em 0"
            maxW="59.375em"
            margin="0 auto"
          >
            <Heading as="h1" size="2xl" isTruncated>
              Unlimited movies, TV shows, and more.
            </Heading>
            <Heading as="h2" size="xl" isTruncated margin="1rem 0">
              Watch anywhere. Cancel anytime.
            </Heading>
            <Text fontSize="xl" margin="1rem 0">
              Ready to watch? Enter your email to create or restart your
              membership.
            </Text>
            <Button rightIcon={<MdArrowForward />} colorScheme="teal" size="lg">
              Get started
            </Button>
          </Box>
        </Box>

        <Divider />

        {/* Area 2 */}
        <Flex
          alignItems="center"
          h="60vh"
          p="4.375em 2.5em"
          position="relative"
        >
          <Flex
            maxW="68.75em"
            m="0 auto"
            justify="space-between"
            alignItems="center"
          >
            <Box
              m="-5% 0"
              w="52%"
              h="100%"
              flex="0 1 auto"
              p="0 3rem 0 0"
              zIndex="3"
            >
              <Heading as="h1" size="2xl" mb="0.5rem" isTruncated>
                Enjoy on your TV.
              </Heading>
              <Heading as="h2" size="md" margin="1rem 0">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </Heading>
            </Box>

            <Flex w="48%" h="100%" flex="0 1 auto">
              <Box>
                <video autoPlay playsInline loop muted>
                  <source src={Video} type="video/mp4" />
                </video>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        {/* Area 3 */}
        <Box h="60vh" p="4.375em 2.5em" position="relative">
          <Flex
            maxW="68.75em"
            m="0 auto"
            justify="space-between"
            alignItems="center"
          >
            <Box w="50%">
              <AppDownload />
            </Box>

            <Box w="50%" h="100%" flex="0 1 auto">
              <Heading as="h1" size="2xl" mb="0.5rem">
                Download your shows to watch offline.
              </Heading>
              <Heading as="h2" size="md" margin="1rem 0">
                Save your favorites easily and always have something to watch.
              </Heading>
            </Box>
          </Flex>
        </Box>

        <Divider />

        {/* Area 4 */}
        <Box p="4.375em 2.5em" position="relative">
          <Heading as="h1" size="2xl" mb="0.5rem" textAlign="center">
            Frequently Asked Questions
          </Heading>
          <Center mt={10}>
            <Accordion allowMultiple w="25%">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Question 1
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Question 2
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Question 3
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" color="teal">
                      Question 4
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Center>
        </Box>

        <Divider />
        <Footer />
      </Box>
      <CustomModal
        title="Sign In"
        isOpen={isOpen}
        onClose={onClose}
        // onClick={() => alert(123)}
        closeButton={false}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign in to your account</Heading>
            <Text fontSize="lg" color="gray.600">
              Ready to{' '}
              <Link color="blue.400" href="/">
                watch?
              </Link>
              ✌️
            </Text>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                justify="flex-end"
              >
                <Link color="blue.400" href="/">
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg="green.400"
                color="white"
                _hover={{
                  bg: 'green.500',
                }}
              >
                Sign in
              </Button>
              <Text fontSize="lg" color="gray.600">
                Don&apos;t have account,{' '}
                <Link color="blue.400" href="/">
                  sign up now?
                </Link>
                ✌️
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </CustomModal>
    </Box>
  );
};

export default Landing;
