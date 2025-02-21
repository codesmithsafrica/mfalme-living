'use client'
import React from 'react';
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Text, Flex
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import SearchBar from '@/components/SearchBar';
// import { ItemProps } from '../page';


// interface Props {
//   items: ItemProps[];
//   key: number;
// }
export default function Home() {
  const [search, setSearch] = React.useState("");
  // const [items, SetItems] = useState<Props | null>(null)
  //   const [_latitude, setLatitude1] = useState<number>(0);
  //   const [_longitude, setLongitude] = useState<number>(0);
  // const [loading, setLoading] = useState(false);
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items`;
  // const color = useColorModeValue('gray.600', 'white')
 

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
  // const filteredItems = items?.items
  //   .filter(matchesSearch)

  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Text ml={2} mb={2} fontSize="sm">
          {'all'}{' '}
          <b>{'spots'}</b>
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
