/* eslint-disable no-return-assign */
/* eslint-disable no-unneeded-ternary */
import {
  Avatar,
  Button,
  chakra,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuList,
  MenuButton,
  useDisclosure,
  VisuallyHidden,
  MenuItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  AiFillBell,
  AiFillFolderAdd,
  AiFillHome,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdLocalMovies, MdTrendingUp } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import { GiExitDoor } from 'react-icons/gi';

import Logo from './Logo';

function Navbar(props) {
  const mobileNav = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <chakra.header
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      zIndex="999"
      {...props}
      bg={isScrolled && '#1a202c'}
      bgGradient={
        !isScrolled && 'linear(to-t, rgba(0,0,0,0.3), rgba(0,0,0,0.15))'
      }
      transition="all 0.25s"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack display="flex" spacing={3} alignItems="center">
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Logo />
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>
          <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
            <Button
              variant="solid"
              colorScheme="teal"
              _hover={{
                colorScheme: 'teal',
              }}
              leftIcon={<AiFillHome />}
              size="sm"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              _hover={{
                colorScheme: 'teal',
              }}
              leftIcon={<RiMovie2Fill />}
              size="sm"
            >
              Movies
            </Button>
            <Button
              variant="ghost"
              _hover={{
                colorScheme: 'teal',
              }}
              leftIcon={<MdLocalMovies />}
              size="sm"
            >
              Series
            </Button>
            <Button
              variant="ghost"
              _hover={{
                colorScheme: 'teal',
              }}
              leftIcon={<MdTrendingUp />}
              size="sm"
            >
              New & Popular
            </Button>
            <Button
              variant="ghost"
              _hover={{
                colorScheme: 'teal',
              }}
              leftIcon={<AiFillFolderAdd />}
              size="sm"
            >
              My List
            </Button>
          </HStack>
        </HStack>
        <HStack
          spacing={3}
          display={mobileNav.isOpen ? 'none' : 'flex'}
          alignItems="center"
        >
          <InputGroup display={{ base: 'none', lg: 'block' }} ml="auto">
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch />}
            />
            <Input type="tel" placeholder="Search..." />
          </InputGroup>

          <Icon as={AiFillBell} cursor="pointer">
            <VisuallyHidden>Notifications</VisuallyHidden>
          </Icon>

          <Menu bg="teal">
            <MenuButton>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </MenuButton>
            <MenuList bg="teal">
              <MenuItem
                icon={<FaUserAlt />}
                bg="teal"
                _hover={{
                  bg: 'teal.500',
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                icon={<GiExitDoor />}
                bg="teal"
                _hover={{
                  bg: 'teal.500',
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </chakra.header>
  );
}

export default Navbar;
