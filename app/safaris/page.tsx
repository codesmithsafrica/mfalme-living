'use client'
import React, { useState, useEffect } from 'react';
import App from '@/components/App'
import {
 Text, Flex,Box
} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import { useParams } from 'next/navigation'
// import axios from "axios";
import Spot from '@/components/Spot';
interface Props_{
  image?: string,
  title?:string,
  text?:string,

};
interface Props {
  item: {name?:string,description?:string ,category:{name:string|undefined}};

}

export default function Home() {
  const params = useParams<{ id: string }>()
  const [item, SetItems] = useState<Props | null>(null)
  const [loading, setLoading] = useState(false);
  const badge="ksh 25k–15k pp"
      const image="wildlife.jpg"
      const cards = [
        {
          title: 'Memorable Safaris ',
          text: "Let us make your memories unfogettable",
          image:
             '3.jpg'
            
        },
        {
          title: 'Hidden Gems',
          text: "Hidden but conspicuous spots  just for you",
          image:
          'wildlife.jpg',
        },
        {
          title: 'City/Coastal Cultural Tours',
          text: "Directly connect with coastal cultural tours",
          image:
          'widlife2.jpg',
        },
        {
          title: 'City/Coastal Cultural Tours',
          text: "Directly connect with coastal cultural tours",
          image:
          'widlife3.jpg',
        },
      ]
   const description=` Embark on an unforgettable wildlife safari with our expert-guided tours in Kenya, where nature’s wonders unfold before your eyes. From the iconic Maasai Mara to the vast savannahs of Amboseli and the scenic beauty of Tsavo, our safaris offer you an up-close experience with Kenya’s diverse wildlife. Witness the majestic "Big Five" – lions, elephants, buffaloes, leopards, and rhinos – in their natural habitats, along with hundreds of bird species, giraffes, and cheetahs.

Our personalized safaris are designed to match your preferences..`
  // const itemsApiURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/item/${params?.id}`;
  // useEffect(() => {
  //   setLoading(true)
  //   // eslint-disable-next-line
  //   axios.get(itemsApiURL).then((response: any) => {
  //     SetItems(response?.data);
  //   });
  //   setLoading(false)
  // }, [item, itemsApiURL]);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      setLoading(false)
    }, 3000)
 

  },[])
  console.log(item?.item?.name,loading,SetItems,setLoading)

  return (
    <App>
      <Box  bg={useColorModeValue('white', '#0a0a0a')}><Spot loading={loading} name={'Wildlife Safaris'} 
      img={cards} description={description} badge={badge}/></Box>
    </App>
  );
}
