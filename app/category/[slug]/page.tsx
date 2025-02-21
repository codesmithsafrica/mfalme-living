'use client'
import React, { useState } from 'react';

import App from '@/components/App'
import {
  SimpleGrid,
  Box, Text, Flex, Spinner, VStack, Stack
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import SearchBar from '@/components/SearchBar';
import { useParams } from 'next/navigation'
import { ItemProps } from '../../page';
import {
  Skeleton,
} from "@/components/ui/skeleton"

interface Props {
  items: ItemProps[];
  key: number;
}

export default function Home() {
  const params = useParams<{ slug: string }>()
  const [search, setSearch] = React.useState("");
  const [items, SetItems] = useState<Props | null>(null)


  const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items/${params?.slug}`;
  const color = useColorModeValue('gray.600', 'white')


  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace("/", "");
    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };

  // eslint-disable-next-line
  const matchesSearch = (item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  const filteredItems = items?.items
    .filter(matchesSearch)

  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Text ml={2} mb={2} fontSize="sm">
{'all spots in'}
          <b>{params?.slug}</b>
        </Text>
      </Flex>

      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}

      >
        <SearchBar search={search} onSearch={onSearch} />
      </Flex>

      <Box bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}>
        <SimpleGrid
          bg={useColorModeValue('white', '#0a0a0a')}
          color={useColorModeValue('gray.600', 'white')}
          paddingTop={20} paddingX={['10px', '20%']} columns={[2, null, 4]} gap={["20px", "40px"]}>

  
          {/* <EmptySearch /> */}
        </SimpleGrid>
        <Flex align="center" mt={4} justify="center" as="i" color="gray.500">
      
        </Flex>
      </Box>

    </App>
  );
}
