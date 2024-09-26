import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Spacer,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png' // Adjust the path based on your folder structure
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className="navbar">
      <Flex align="center">
        {/* Logo */}
        <Link to="/">
          <Image src={logo} alt="Wanderlust Logo" className="logo" />
        </Link>

        

        <HStack marginLeft={"70px"}>
        <Link className="nav-link">
          <Text>Destination</Text>
        </Link>
        <Link className="nav-link"><Text>Planning</Text></Link>
        <Link className="nav-link"><Text>Inspiration</Text></Link>
        </HStack>
        <Spacer />
        {/* Search Icon */}
        <HStack>
          <IconButton
          icon={<IoSearchOutline/>}
          textDecoration={"none"}/>
          <Text className='navbar-search'>Search</Text>
        </HStack>
        <Button className="sign-in-button">
          Sign In
        </Button>
        {/* Sign In Button */}
        
      </Flex>

      {/* Optional Search Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Destinations</DrawerHeader>

          <DrawerBody>
            {/* Add your search input and logic here */}
            <Text>Search functionality can go here.</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
