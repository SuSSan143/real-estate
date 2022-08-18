import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Card from "../Components/Card";
import Filters from "../Components/Filters";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { Spinner } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=50`
      );
      setIsLoading(false);
      setData(data.hits);
    };
    fetchData();
  }, []);


  return (
    <Box as="main">
      <NavBar />
      <Box px="36" bgColor="pink.50">
        <Header />
        <Filters setData={setData} setIsLoading={setIsLoading} />
        {isLoading ? (
          <Flex justifyContent="center" alignItems="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Grid my="10" templateColumns="repeat(3, 1fr)" gap={6}>
            {data.map((property, i) => (
              <GridItem key={i}>
                <Card property={property} />
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default App;
