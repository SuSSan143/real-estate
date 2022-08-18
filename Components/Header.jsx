import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <HStack as="header" justifyContent="space-between" py="10">
      <Heading as="h1" fontSize='3rem'>Search properties to rent</Heading>
      <Box>
        <InputGroup bgColor='white'>
          <Input placeholder="Search with search bar" />
          <InputRightElement children={<ChevronDownIcon color="green.500" />} />
        </InputGroup>
      </Box>
    </HStack>
  );
};

export default Header;
