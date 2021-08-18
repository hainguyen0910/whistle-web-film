import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import SliderBadging from 'assets/img/slider-badging.jpg';
import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import Slider from 'react-slick';
import styled from 'styled-components';

const PrevArrow = ({ onClick }) => (
  <Box
    borderRadius="50%"
    border="1px solid"
    borderColor="green.500"
    display="block"
    zIndex="1"
    position="absolute"
    top="79"
    left="4"
    onClick={onClick}
    cursor="pointer"
  >
    <Icon as={MdArrowBack} w={8} h={8} />
  </Box>
);

const NextArrow = ({ onClick }) => (
  <Box
    borderRadius="50%"
    border="1px solid"
    borderColor="green.500"
    display="block"
    zIndex="1"
    position="absolute"
    top="79"
    right="4"
    onClick={onClick}
    cursor="pointer"
  >
    <Icon as={MdArrowForward} w={8} h={8} />
  </Box>
);

function ImgSlider() {
  const i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <Carousel {...settings}>
      {i.map((item, index) => (
        <Wrap key={index}>
          <Box h="100%" position="relative">
            <Image src={SliderBadging} alt="" />
            <Icon
              as={BsPlayFill}
              w="10"
              h="10"
              color="green"
              position="absolute"
              top="61"
              left="160"
              className="icon-play"
              zIndex="3"
              opacity="0"
            />
            <Box
              bg="rgba(0,0,0,.1)"
              bgImage="linear-gradient(to left,rgba(0,0,0,.1) 0,rgba(0,0,0,0) 0%,rgba(0,0,0,.6) 100%)"
              position="absolute"
              top="0"
              bottom="0"
              right="0"
              left="0"
              opacity="0"
              zIndex="2"
              borderRadius="2rem"
              className="box-shadow"
            />
          </Box>
          <Box
            position="absolute"
            top="5"
            zIndex="99"
            ml="5"
            color="black.50"
            opacity="0"
            className="desc"
          >
            <Flex className="itemInfoTop" flexDir="column">
              <Text>Movie title</Text>
              <Box color="gray.400" fontSize="12px">
                <Text>• 1 hour 14 mins</Text>
                <Text className="limit">• 16+</Text>
                <Text>• 1999</Text>
              </Box>
            </Flex>
          </Box>
        </Wrap>
      ))}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  /* margin-top: 1.5rem; */
  padding-bottom: 1.5rem;
  overflow: hidden;
  cursor: pointer;

  ul li button {
    &::before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  border: 1rem solid transparent;
  height: 12rem;
  border-radius: 2rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 79%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  &:hover {
    img {
      transform: scale(1.1);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    .desc {
      opacity: 1;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    .icon-play {
      opacity: 1;
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    .box-shadow {
      opacity: 1;
      transform: scale(1.1);
      transition: all 0.3s ease-out 0.3s;
    }
  }
`;
