import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import MoneyHeistImg from 'assets/img/money_heist_img.jpg';
import TitleMovie from 'assets/img/title-movie.png';
import Featured from 'components/Featured';
import Footer from 'components/Footer';
import ImgSlider from 'components/ImgSlider';
import Navbar from 'components/Navbar';
import React from 'react';

function Home() {
  const item = {
    imgTitle: TitleMovie,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi pariatur fugiat nulla reprehenderit optio dolores alias beatae obcaecati facilis magnam impedit, hic, voluptate aut itaque repudiandae officiis tenetur rem debitis.',
    year: 2018,
    genre: 'Action',
  };

  return (
    <Box bg="#1a202c" color="white">
      <Navbar color="white" position="fixed" />
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
            <Image src={MoneyHeistImg} boxSize="100%" objectFit="cover" />
            <Box
              bg="rgba(0,0,0,.1)"
              bgImage="linear-gradient(to left,rgba(0,0,0,.1) 0,rgba(0,0,0,0) 0%,rgba(0,0,0,.6) 100%)"
              position="absolute"
              top="0"
              bottom="0"
              right="0"
              left="0"
            />
          </Box>
        </Box>
      </Box>
      <Featured
        item={item}
        w="30rem"
        color="white"
        position="absolute"
        top="300"
        left="100"
      />

      <Flex flexDir="column" mt="10" px="10">
        <Heading as="h1" size="lg" ml="5">
          RECOMMEND
        </Heading>
        <ImgSlider />
      </Flex>

      <Flex flexDir="column" mt="10" px="10">
        <Heading as="h1" size="lg" ml="5">
          NEWS
        </Heading>
        <ImgSlider />
      </Flex>

      <Flex flexDir="column" mt="10" px="10">
        <Heading as="h1" size="lg" ml="5">
          SERIES
        </Heading>
        <ImgSlider />
      </Flex>

      <Box px="10" mt="10">
        <Heading as="h1" size="lg" ml="5">
          MORE LIKE THIS
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5">
          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXztBf6MHCBn2Gz863DubYYHZkKhfyqgCbIk0E4ehs1P458R6RbVaRzOLQG8wNL1V3EA6LyVGYHqIqlmBa-jJAJfj8vq.jpg?r=b9e" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXztBf6MHCBn2Gz863DubYYHZkKhfyqgCbIk0E4ehs1P458R6RbVaRzOLQG8wNL1V3EA6LyVGYHqIqlmBa-jJAJfj8vq.jpg?r=b9e" />
          </Box>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5">
          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABelJ8016ECFA6-Cx2kqp2oi2k9s3_yNa0DUM3mQKQDUe6rbKC3P6mIaRwl1SnfT46dBlOy4_DBhbgUJ5bNB0dfKj-58e.jpg?r=01d" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABelJ8016ECFA6-Cx2kqp2oi2k9s3_yNa0DUM3mQKQDUe6rbKC3P6mIaRwl1SnfT46dBlOy4_DBhbgUJ5bNB0dfKj-58e.jpg?r=01d" />
          </Box>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5">
          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABelJ8016ECFA6-Cx2kqp2oi2k9s3_yNa0DUM3mQKQDUe6rbKC3P6mIaRwl1SnfT46dBlOy4_DBhbgUJ5bNB0dfKj-58e.jpg?r=01d" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbbs_Q33lvn04NRmmwf1yZk0rQVHy7RZR0ijCHP47XecaxJS8k0WAT7SGJPIgRCBTUP3RrqLcBwFzbhyID6JwNdcHHR-AEDrRWA5q41PO_y0ai0L613hLMN_k33qEQ.jpg?r=ae6" />
          </Box>

          <Box w="100%" bg="blue.500" cursor="pointer">
            <Image src="https://occ-0-395-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQAQPEhiGrHogykXEOva1srZ3ZZ8_2v4QUCGIWSvelrZZme3bmb0TIbrRWiqHboc0rQmcWIS4Px6jBz6KQFLwn7G9j5ShMnKH6N5YdXru8wcvdxIojs3OMsWzHFvrg.jpg?r=a03" />
          </Box>
        </Grid>
      </Box>

      <Box mt="10" px="10">
        <Heading as="h1" size="lg" ml="5">
          COMING SOON
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5">
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5">
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
          <Box w="100%">
            <Text color="white">
              Apollo 10 1/2: A Space Age Adventure A space age adventure set
            </Text>
            <Text color="gray.500">
              against the backdrop of the 1969 Apollo mission to the moon,
              inspired by writer-director Richard Linklater’s childhood.
            </Text>
          </Box>
        </Grid>
      </Box>

      <Box mt="10" />
      <Footer />
    </Box>
  );
}

export default Home;
