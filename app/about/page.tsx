'use client'
import React from 'react';
import App from '@/components/App'
import {
 Text, Flex, 
 Container,
 SimpleGrid,
 Image,

 Heading,

 Stack,

} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}
export default function Home() {


  return (
    <App>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }}
              //@ts-expect-error:fix
       spacing={10}>
        <Stack 
                //@ts-expect-error:fix
        spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            About Us
          </Text>
          {/* <Heading> tour and travel company</Heading> */}
          <Text color={'gray.500'} fontSize={'lg'}>
          Mfalme Living  is a airbnb company based in Mtwapa, Kilifi County, coastal Kenya.  Our slogan, "Your Experience, Our Passion," reflects our commitment to providing exceptional travel experiences throughout coastal Kenya and East Africa. We offer a comprehensive range of services, including safaris, city tours, exploration of hidden gems, bookings, transportation, and tailored travel packages
          </Text>
    
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'logo.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </App>
  );
}
