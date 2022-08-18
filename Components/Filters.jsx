import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
} from "@chakra-ui/react";
import {
  rentFrequencyFilterArray,
  sortFilterArray,
  typeFilterOptions,
} from "../utils/filters";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const parser = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const Filters = ({ setData, setIsLoading }) => {
  const [filters, setFilters] = useState({
    purpose: "for-rent",
    type: 4,
    rentFrequency: "monthly",
    sort: "price-desc",
  });
  const updateFilters = async (e) => {
    setIsLoading(true);
    const data = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${
        filters.purpose || "for-rent"
      }&categoryExternalID=${filters.type || 4}&rentFrequency=${
        filters.rentFrequency || "monthly"
      }&sort=${filters.sort || "price-desc"}`
    );
    setIsLoading(false);
    setData(data.hits);
  };

  return (
    <FormControl>
      <HStack
        bgColor="white"
        justifyContent="center"
        alignItems="center"
        py="10"
        pl="2"
        pr="10"
        borderRadius="lg"
      >
        <Flex>
          <Box pl="10">
            <FormLabel opacity="0.5">Purpose</FormLabel>
            <Select
              onChange={(e) =>
                setFilters({ ...filters, purpose: e.target.value })
              }
              fontSize="1.5rem"
              fontWeight="900"
              width="210px"
              variant="unstyled"
            >
              <option value="for-rent">For Rent</option>
              <option value="for-sale">For Sale</option>
            </Select>
          </Box>
          <Center height="80px">
            <Divider orientation="vertical" />
          </Center>
        </Flex>
        <Flex>
          <Box pl="10">
            <FormLabel opacity="0.5">Type</FormLabel>
            <Select
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              fontSize="1.5rem"
              fontWeight="900"
              width="210px"
              variant="unstyled"
            >
              {typeFilterOptions.map(({ type, option }, i) => (
                <option key={i} value={option}>
                  {type}
                </option>
              ))}
            </Select>
          </Box>
          <Center height="80px">
            <Divider orientation="vertical" />
          </Center>
        </Flex>
        <Flex>
          <Box pl="10">
            <FormLabel opacity="0.5">Rent Frequency</FormLabel>
            <Select
              onChange={(e) =>
                setFilters({ ...filters, rentFrequency: e.target.value })
              }
              fontSize="1.5rem"
              fontWeight="900"
              width="210px"
              variant="unstyled"
            >
              {rentFrequencyFilterArray.map((option) => (
                <option key={option} value={option}>
                  {parser(option)}
                </option>
              ))}
            </Select>
          </Box>
          <Center height="80px">
            <Divider orientation="vertical" />
          </Center>
        </Flex>
        <Flex>
          <Box pl="10">
            <FormLabel opacity="0.5">Sort</FormLabel>
            <Select
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              fontSize="1.5rem"
              fontWeight="900"
              width="210px"
              variant="unstyled"
            >
              {sortFilterArray.map((option) => {
                const optionArray = option.split("-");
                return (
                  <option key={option} value={option}>
                    {`${parser(optionArray[0])} ${parser(optionArray[1])}`}
                  </option>
                );
              })}
            </Select>
          </Box>
          <Center height="80px">
            <Divider orientation="vertical" />
          </Center>
        </Flex>
        <Button
          position="relative"
          left="7px"
          fontSize="1.5rem"
          p="7"
          colorScheme="blue"
          onClick={updateFilters}
        >
          Search
        </Button>
      </HStack>
    </FormControl>
  );
};

export default Filters;
