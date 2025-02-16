import { Stack, Text, Flex } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu"
import React from "react";

const EmptySearch = () => {

  return (
    <Flex justify="center" textAlign="center" mb={8} py={12}>
      <Stack align="center">
      <LuSearch size="64px" color="gray.500"  />
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          No Items Found
        </Text>
       
      </Stack>
    </Flex>
  );
};

export default EmptySearch;