'use client'
import React, { useState, useEffect } from 'react';
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Text, Flex, Image
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import SearchBar from '@/components/SearchBar';
// import axios from "axios";
import { Card } from "@/components/Card";
import { ItemProps } from '../page';
// import {
//   Skeleton,
// } from "@/components/ui/skeleton"

interface Props {
  items: ItemProps[];
  key: number;
}
export default function Home() {
  const items={

  }
  const [search, setSearch] = React.useState("");
  // const [items, SetItems] = useState<Props | null>(null)
  const [loading, setLoading] = useState(false);
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items`;
  const color = useColorModeValue('gray.600', 'white')
  // useEffect(() => {
  //   setLoading(true)
  //   // eslint-disable-next-line
  //   axios.get(itemsApiURL).then((response: any) => {
  //     SetItems(response?.data);
  //   });
  //   setLoading(false)
  // }, [items, itemsApiURL, loading]);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      console.log("Delayed for 3 second.");
      setLoading(false)
    }, 3000)
 

  },[loading])
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace("/", "");
    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };
  // // eslint-disable-next-line
  // const matchesSearch = (item: any) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // const filteredItems = items?.items
  //   .filter(matchesSearch)
console.log(setLoading)
  return (
    <App>
      <Flex
        bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}


      >
        <Text ml={2} mb={2} fontSize="sm">
          {"Our"}{' '}
          <b>{"Gallery"}</b>
        </Text>
      </Flex>

   

      <Box bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')}>
        <SimpleGrid
          bg={useColorModeValue('white', '#0a0a0a')}
          color={useColorModeValue('gray.600', 'white')}
          paddingTop={20} paddingX={['10px', '20%']} columns={[2, null, 4]} gap={["20px", "40px"]}>
               <Box >
               <Image
                borderRadius="lg"
                src={
                  '9.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '10.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '11.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '12.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '13.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '14.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '15.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '16.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '17.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '18.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '19.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '20.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '21.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '22.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '2.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '4.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '6.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '23.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
        
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '24.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '25.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
              
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '26.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '27.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '28.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '29.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '30.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '31.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '32.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '33.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '34.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '35.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '36.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '37.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '38.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '39.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '40.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '41.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '42.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '43.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '44.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '45.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '46.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '47.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '48.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
          <Box >
               <Image
                borderRadius="lg"
                src={
                  '49.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
          </Box>
         
{/* 
          {loading ? (
            <Flex pt={24} align="center" justify="center">
              <VStack colorPalette="teal">
                <Spinner color={color} />
                <Text >Loading Spots...</Text>
              </VStack>
            </Flex>
          ) : (
            <>
              {filteredItems?.length ? (
                // eslint-disable-next-line
                filteredItems?.map((item: any, index: any) => <Box as={'a'}  
                //@ts-expect-error:typefix
                href={`item/${item?.id}`}><Card name={item?.name} src={`/restaurants/${item?.image}`}badge={item?.category?.name} /></Box>)
              ) :     (   <>  <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack>
            <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack>
            <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack>
            <Stack gap="6" maxW="xs">

              <Skeleton height="200px" />
            </Stack></>)
              
             }
            </>
          )} */}
           {/* <EmptySearch /> */}
        </SimpleGrid>
        {/* <Flex align="center" mt={4} justify="center" as="i" color="gray.500">
          {filteredItems?.length ? (<>{`Showing ${filteredItems?.length} out of ${items?.items?.length} spots `}</>) : null}
        </Flex> */}
      </Box>

    </App>
  );
}
