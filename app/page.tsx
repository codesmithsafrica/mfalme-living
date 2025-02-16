'use client'
// import { Card } from '@randukelvin/card'
import App from '@/components/App'
import {
  SimpleGrid,
  Box, Flex, Text, Heading, Stack, Icon,  
  Container,Avatar,

} from "@chakra-ui/react";
import { useColorModeValue } from '@/components/ui/color-mode'
import React, { ReactElement } from 'react';
import CaptionCarousel from '@/components/Hero'
// import { Card } from "@/components/Card";
import {   FcInTransit,FcLandscape,FcGlobe ,FcCompactCamera ,FcCloseUpMode  } from 'react-icons/fc'
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
interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}



const TestimonialAvatar = ({
  src,
  name,
  role,
  title,
}: {
  src: string
  name: string
  role: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      {/* <Avatar src={src} mb={2} /> */}
        <Avatar.Root>
      
      <Avatar.Image src={src} />
    </Avatar.Root>
      <Stack
           //@ts-expect-error:fix 
       spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text  fontSize={'sm'} fontWeight={500}>{role}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={10}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}
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

      <Box p={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Stack
            //@ts-expect-error:fix 
            spacing={4} maxW={'3xl'} textAlign={'center'}>
            <Heading fontWeight={700}  mt={4} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Who are we?</Heading>
            <Text color={'gray.600'} fontStyle={'italic'}  fontSize={'xl'}>
              Maiyo Adventures is a Mtwapa, Kilifi County-based tour and travel company dedicated
              to delivering immersive, sustainable travel experiences across coastal Kenya and East
              Africa. With the slogan “Your Experience, Our Passion,” we cater to domestic and
              international tourists seeking authentic cultural encounters, wildlife safaris, and curated
              adventures..
            </Text>
          </Stack>
        </Flex>

      </Box>
      <Box p={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Stack
            //@ts-expect-error:fix 
            spacing={4} maxW={'3xl'} textAlign={'center'}>
            <Heading fontWeight={700}  mt={4} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Vision</Heading>
            <Text color={'gray.600'} fontStyle={'italic'} fontSize={'xl'}>
            To become East Africa’s most trusted sustainable travel brand, celebrated for
            innovative itineraries, cultural preservation, and exceptional guest satisfaction.
            </Text>
          </Stack>
        </Flex>

      </Box>
      <Box p={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Stack
            //@ts-expect-error:fix 
            spacing={4} maxW={'3xl'} textAlign={'center'}>
            <Heading fontWeight={700}  mt={4} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Mission</Heading>
            <Text color={'gray.600'} fontStyle={'italic'}  fontSize={'xl'}>
            To empower travellers to explore coastal Kenya and East Africa through ethically
              designed journeys that benefit local economies, conserve ecosystems, and fost
              cross-cultural understanding.
            </Text>
          </Stack>
        </Flex>

      </Box>
      <Box p={4} px={4}>
        <Flex justifyContent={'center'} alignItems={'center'}

        >
          <Heading mt={4} mb={8} fontWeight={700} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
            Our Services
          </Heading>


        </Flex>
       
        <SimpleGrid columns={{ base: 1, md: 2 }}
          //@ts-expect-error:fix 
          spacing={10} justifyContent={'center'} alignItems={'center'} ml={['unset',20]} px={['unset','20%']}>
          <Feature
            icon={<Icon as={FcLandscape } w={10} h={10} />}
            title={'Wildlife Safaris'}
            text={
              '3–7-day tours to Tsavo East/West, Amboseli,and Maasai Mara. Includes luxury lodges/camping.'
            }
          />
          <Feature
            icon={<Icon as={FcGlobe } w={10} h={10} />}
            title={'Coastal Cultural Tours'}
            text={
              'Guided visits to Lamu Old Town (UNESCO site),Mombasa Fort Jesus, Giriama villages.'
            }
          />
          <Feature
            icon={<Icon as={FcCompactCamera} w={10} h={10} />}
            title={'Hidden Gems'}
            text={
              'Exclusive experiences: Dabaso Village(bio-farming), Kayaking in Mida Creek, Kaya Forest rituals'
            }
          />
          <Feature
            icon={<Icon as={FcCloseUpMode} w={10} h={10} />}
            title={'Tailored Packages'}
            text={
              'Custom itineraries (e.g., “Luxury Honeymoon” or “Family Adventure”)'
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Transportation'}
            text={
              'Fleet of 4x4 Land Cruisers, minibuses, and boats.'
            }
          />
        </SimpleGrid>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack}
          //@ts-expect-error:fix 
       spacing={12}>
        <Stack 
            //@ts-expect-error:fix 
        spacing={0} align={'center'}>
          <Heading mt={4}  fontWeight={700} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Our Team</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack
        alignItems={'center'}
        justifyContent={'center'}
          direction={{ base: 'column', md: 'row' }}
              //@ts-expect-error:fix 
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
   
            <TestimonialAvatar
              src={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAACUCAMAAAAppnz2AAAAilBMVEX///8wMzj8/PwAAAAtMDUxMzb29vb5+fnx8fEwMTMrLjTq6uopKiwtLjAlKC4oKzHf39/X19cAAAvDw8RnaGofIynQ0NCNjo9fYGKDhIWUlZYTGCCjpKWdnZ7JycokJSd2d3g/QEKzs7RJS04UFRgbHB8KEBlRU1YICw83Oj0VHCEAABEADhVJTVXc5s0HAAAP5ElEQVR4nM1d63qjOAyNweYWrgFDCPd7YLrv/3ork6TttGljA2nnfPtjdqbFHCzJkizLu93m0NKmLUyMLtAtq+ja/nw+XHE+w79aCOPLTxhG0TaptttJ0vavsiVUf5BfDEIIvDTGDk060gRxWueeu2dwvdzP4mNDponaQA7o6cTs5aFWf/vV70Ni2En7ky3bQErXLcNxHHTM/P39qZD2fhYQx7Ysa+Zny91p/tF/b+akneqVcmvMEmZaehWk7sNfctOy0rHhwMxho5dL71+cOCUs+1bXCcIOHofYVy5//fUU3P4lj4fxwg1NfRkqz39VbjBBVLx4oky1DBtohWIiJYVxMxYWSDFOpthT/iGRVN2T2epAzDGqY60teIJWHyuTTZzRFyf3n5FJrW5aC+TQNprSv/6d0FefDb5fNthm0/7S1PvtX1IYYDjCsmNvZDtD7K16lhcNpglTb09l/vvqJu3TqgMpsmnDeK1UEC8eCoep25juf1nbYMJakxBMq9iX1voR7AF5XFFMkDOV4a9qG2hYAoJo6kG9lfgodUBMUNqkAVP0ax4XmEQw9Zg2mbuh7LhZw+S7ME/ubwgkGzIsJ1AKB5e+uqlDq/qlZRPitGW42TO5wXj4x4SZjur02IsShZtVBUh5e/R/3I7AcHXVMUlctjI/erriHylGelfVPy+P6UhBYIpS0JPiheSVtkVIgTP1B2eNieKJrTumFW0viTfsTxYbooikHxXIU2uB7SAQCz9pVInF5shBxOqi54xwd8xdxJTAHDdbxO5DqUcTAgBG7ScWtplYAQFmMebPVgEpHynCevFjs5YVJiK0yp9tkeHp3uggXS9OTx3nFTWaRfFnVlGPFAhjK/2Jda0emcnqwh+yWO5kzCr9/JHCBrQay+siMX4oO+/AqDHZfyak3f5oI0Jk/wfXGF9mce3x2QFbaWM0yumPxhc1UCNm+dxBMgjmsfxDC8wV0u4kw4ptZU+bMyDjVyZG9Ljgd+eA+fKnBTi2EGZX/uMfXAamZAWMYD7NpfoSmgmuAT0+z0mNCp3ggydOTPLSciBmZ47HMvUW+GSeDKEgfY4vMkdksJLJwhGT5gcH+c9kOwY2HDt5keWjaEJRkmpZt5znrGogi0FHEA3EvrjkxvRQEIJu+2mwZujFC409gQ8EGq6UHTGS4Dkp1szGxKJCWRfJjWhvoHk37RU6S+C3NHL5HwTUXNNEuDhJT7DK+WAjvU0FsoCSVo9njO7D6CEIEnhLte5gURvy7ZkpcQKhUimS9HDLs/n3dP0F81zyTxsoQ0kRaWNlW8PMMlVgPhwi4OBL+fGsoy+ZwVySdsi5UwHSLiQGMqp6a2b7GBbL5MQ/ZZJfJegrUbwZk67y+d9TO4HUTPHGRkSqkUXsht98ALHuETGY0EKEmguajtHGlh+EnOAp5bX4IDpN94DWTA0VDb+AKyllqr5tTpzF0SLejXtMOIjNAnl0ua2de6TgGW86aXswjJjyW3yl7B+K4o1aX3Kv/VJNMek21TRfN/mnjPlhBz5aM174J4FNGkYbhtfa6Uz4pwz8hcoWYOaM3FKuMk0TsdCP3tRrTGIP/Dmd6EWAGEJ9xB22eUcbOc1mSRi1ntiX4lYHt+PUsQswTrjNnZIlgi7et9gHFBZ//og24rSLr0hiTmYsqndIF2wUgkq+bSDKb5GUSZAYwhOn5jBfCAy/s1EWVztNCNsp509LlyyaGA785jHFGCXZNlsl7kCRfeT8TLDqBlSY2RRwv00INsQethHHsNVJF/F/pV7IfsywDtxPVyL4cP0G4ghxenomls4vLp64MCIikE1njt424rgPCmLyCiMgFVvMZuhnXjW+iCM9rvewwKGgWCiWjkVtPmNWlNzvA8E9xnS9oklS/QchO+P++d1RxLO6ghQD/ytlNl6QG/z8plo0gT8jkHhunAVzZjb8A/iDg7pove+4ZzZfZNHXDXFmyDD4B3BB8e1hvaK5IFw0FnDUljFz+AdQ4w4b03pFy8GIU5EdcOvZzHanAryW1UGamoIlEkqFVYv0bBR4p7oyUL/a31fiCbHQjBfSblhgG3VTwDbCiuYgWiorraPWwLoYiKSLSmFXX2Q9Y2BRlVOtNY77Qte7WOTzLPFBiIAPAnIRU4S7tcbRPRNiCu3IhYv8RpG0+i4CVe7XpgzyA9EJtwcyj7uAGZKFXiojGL2sNI5SLROrEsldggkpvtmAuQ9bxIAw44hRv9K/UtOWmCK+FRv3rIsy+yOW9/XBg0uydWZfjVoiYvTnjdezJUgM9WLmIATPcYpWMoOQwR4ElbUUzl2VYpsQLOs4leuYKQHFtmgdhpuI5hsFCzFcFnwKlgJ8BDADT1906RAMPmHKxLAPbGQfVzJjmaJAdLl3HRHf0XBElyaNOSHDGmZgDZoFzCQp7QWYvaTCtTOMWbOWmbOAGQzN6zwSMgmLxAbMdjMzKj70zmt406ldI1LNc8EGzKSlzCR/5KNWjL74GQrGzF47ZwNdxAzcsrHgkMViXHKqf2a2yoJc17NFdVxq/XjWFhKbrT5da/XZ11lWManWTc/qIr5B2yzrw7DFSq1ChGwel4VCUli21lduPzsUngT5Mn+deVd0pXelRj0yRTzi95DcjHy5sYsTkgnUAf4F5hEnaz3itBeOYt5ByctpYrVj76pDLrPYdSuaL7Aopl8ZxUj1gVijSJLiw+9rwO1c6H8x0+1+KvPFGRppjjxf1mb2c5nouki24NN7aF46nOWEOpjBsXu5HVJPW/NeGXyow0IdfYV71nVjec31XFKlaq4fBZVJKTWr4OS72sosKMvwnNdmePaFjm2hrNxdSKqqKJqmKYq6vlp2zsoVa7NyWmNisUzq/Zd5+/31JXzbZFKVuBMqTPoCzDec2UkbFDiHA0sWrM1+g9lfV7wr3SOzjt6clFtfocR2mczTyjlT3LzOTlEUndI6d9fWBZzovMu0dvJdG4vtDL5hHloJsyOVZfnQ91PS9/3hIMvFMcuXGgCJ7QwSa1pfc7sfbLHd3LdXgKlKh1Y+048elkHnRc1dpipsN9ds1u/mKlGCnGGBf6Xu6+HwYuP7CWNiFefDkO6FhUHa+YNJunj9Djz4Vwg7wl6I5sXtH/vNT/zEjP2tfehj5o2ITR2rKdugaoLlRQ2UxGJar+XBoeXJgeP2HORinhbbhUXT+rJUaV4XuUvlLmN78YF+GZn9zQyR7lwKnbXzNqpOYvX/LTG4TzZIrCFLl1ze+hHILJa47VhbGN41rh4NCGE2KXAMWx3iPN4zRFreyDrHbL2HIQ857+FRJZq2qQLcscpNk18c96dWfGMQIafn7eYTztXf21RuztW2+KE4zibOC9gRQWFigHPA1/emtvB2FfshuCEcp6NYX6Bq4j018hF6wdVIZQ8OCLa3OlntzsnmR0+TdlrKWl4sIwaWxGbNbx6NkTcm2e5gtZL2mLTfmyOwbFqGFxQmvYODs0d2RM3YoQju02IPwE6POKT4PusosV5HwvvTn6idHsi8d6Qbnh6B2QDfkdDvt7m0k24tMh3vYejf2wapLhBqN6jafIVP8Fx99TXUjCyp/vtEDWXfLZxM47G5ZWeGfQk2r/guCV9X5gbEwPcevxENtTYtNJVbnqyTagej4huT5Df2alG8wG6+6hcjXabM2fYIqwuTRrovJ81bUvB9H4RtkNynptYUIVpu2ktDYpNGiq+Oo2ixuXQZ+wzL/MopcAdYLo2t+00wTfvi0Ia0q/EW1uMGjO6pGng4WctqRzZvN8GCB2e869uFg/jppe9wr9ALxg1HkxhPaBHCDh6DkN9ZSvbRpxTOStDozsRoJXiMydaH+xnYppXe1Z8DRF/fmBj4Ip/to+QnWOywBycgRjlRg1j6pzyfW/Kc4xfDHa9gz5q+0dMTehtJ8zFt0n06sV53G61k74Dbj+qkMAv2vRu0AsyIXPJh776cu+Dw42N8CFTA/P7BgmW/QmD5MP38lw5LtUjxGDfI+W8S3tlhHQuexGuWR/AR9PetNt2Ao1RnAbO/z0yrBLzS7omdvC5+b/L+IK2/tcW/Anc388g2qYKWIPt5sshwsoCI/Ha0SYueIozgh/SvUZi0y2QLGU701KZvSjm3b3zdKfTGtXH0V9Sc0bvy2tUyq7QINu6a9BHglcLCLN+2d/NufSB9H05769ATyjCEudHh8K9waXSIMD5cx9FSfZOI8yOwjdPrRobLyv9Zi8OnzhhzrerRIcS0r9TUunK2tiGEIJO1Mp+puNREsyP89F6YoM+Wpc+NWC6dJv3B3FjXiG4O/rWN5dweBptrqoj4me0iRoVW3vV/vcBal2f8CMcKwquf482ddJ/UuPEjMxgxLjAmdnUL1vbRuCE13RxZEDPfYBVWtk4wjX+iz/IFcavryB5vly8p9eBsFVUb5nDL7yvMWiFcPMup+gzWO6CzwH6Nr/chhPG4SY4HnhmH111CDTweEMVJcCd5HbOdFBUmITbKbu6xlh7pWvsPJpceL7sWMMQ+g+cjkwp0JtkEamaxPrcO6wp60YEwqug6dbO6KnrNgHixCV/Ktn70tofdHGKn7IYOqzjelG2n+jHpDJ796bvAlJT+7YYwxQ8KSye0Ej4zs5oZW7KHlhBsN9lrR+59XdrdksUN/MKJlpeOt+zR+7Qp5s6V9c9Zxffs8oBdembrZf6aO977sd7bwrNmnq24fv1AalgiUDFncdX7ergRBdffokP25q7u/ahJWNDGvQ+PadJE/mW+5qdmA8Vgnor4V24vukBLK1b6YaNgvsDo+pdhHdg9hSAAP548oGUHdfiWxlT9krBIqavSX7zfTWIF+b3Dit+a+F1eV3LzNDAP0wOxxM70hwZp7r59FVgYmwI01WwD/4et/V+QLstOB7Lj2EPEHMnbGqC4YR0P9CWhxm3mQDzZf1dSNDnD56jDSx3n1ZFnt9ax7appzJ4bjnFByYOOXetiOzO3N81Q98AuCkbaH85tVxQmQ1F0U/+SFGMQ1bn7rghQmnnNNw0y0/H7t/EB2IV8rC8ZRItD/KGbgKoBPb/OojI4HodmaI5BGae1H7p77UPdZh43OsuDGT1o2K9Zjg9QvcieIKzCjtEE9Vtm5vp+kqpo2v4GTVPU2z/M1eDsT1odVHhuOE3t6J+6iVXxyrZjHdkNKnRT6VwXLoXxMNrs5kQ8Jf/YLazsRGgenOc8uGE44xDx97gIT8NomXOiiPagYP+KIL6DGgaHBEGkiAwH46qsb+btXcG+9E4CAW5dVhgbmGAglsjB794H+RXYxLlxe7AIs/LYsAswgF9Xr+/zLBhN07ksCpiVFC89aPdsXKZDrSu5n4MZjHXLpAmdb972327eDv00ChpEKWWXU8/Lm9HL/9XqJidLngo3qxLb0a83PLC7K2jS93+ul6X/6fuEUme+TZywu8cde6qesS7/DyaeGlEMaNPEAAAAAElFTkSuQmCC'
              }
              name={'John Doe'}
              role={'CEO'}
              title={'10+ years in East African tourism; ex-Manager at Serena Hotels.'}
            />
          </Testimonial>
          <Testimonial>
    
            <TestimonialAvatar
              src={
             'data:image/png;base64,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'
              }
              name={'Jane Smith,'}
              role={'Operations Lead'}
              title={'Certified safari guide; founder of “Coastal Treks'}
            />
          </Testimonial>
          <Testimonial>

            <TestimonialAvatar
              src={
              'data:image/png;base64,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'
              }
              name={'Ahmed Hassan'}
              role={'Finance Head'}
              title={'CPA-K; former CFO at Nairobi Travel Group.'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>


    </App>
  );
}
