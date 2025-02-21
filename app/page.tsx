'use client'
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Flex, Heading, Stack,
  Container,

} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import React from 'react';
import CaptionCarousel from '@/components/Hero'
// import { Card } from "@/components/Card";

// import axios from "axios";
// import {
//   Skeleton,
// } from "@/components/ui/skeleton"
// import { CheckIcon } from '@chakra-ui/icons'


export type ItemProps = {
  id: number;
  name: string;
  image: string;
  long: string;
  lat: number;
  badge: number;
  category: { name: string }


};


export default function Home() {

  // const items = {}

  // const [items, SetItems] = useState<Props | null>(null)
  // const [loading, setLoading] = useState(false);
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/items`;
  // const color = useColorModeValue('gray.600', 'white')
  // useEffect(() => {
  //   setLoading(true)
  //   // eslint-disable-next-line
  //   axios.get(itemsApiURL).then((response: any) => {
  //     SetItems(response?.data);
  //   });
  //   setLoading(false)
  // }, [items, itemsApiURL]);
  // console.log('items', items)
  return (
    <App>
      <CaptionCarousel />
      <Box p={4} px={4}>
        <Flex justifyContent={'center'} alignItems={'center'}
        >
          <Heading mt={4} mb={8} fontWeight={700} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            Feautured spots
          </Heading>
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
      </Box>
    </App>
  );
}
