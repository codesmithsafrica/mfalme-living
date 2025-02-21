'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,

  useBreakpointValue,
  Icon,
  IconButton,

  IconProps,
  Badge

} from '@chakra-ui/react'
import React from 'react'
import {
  Skeleton, SkeletonText
} from "@/components/ui/skeleton"
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { useColorModeValue } from './ui/color-mode'
import Slider from 'react-slick'
interface Props {
  name?: string, description?: string, badge?: string, img:any , loading: boolean;
};
type Props_ ={
   image?: string,
   index?:string
};
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}


export default function Spot({ name, description, badge, img, loading }: Props) {
  console.log('name', name, description, img,badge)
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })
  // const color = useColorModeValue('GrayText', 'white')


  return (
    <Container maxW={'7xl'} bg={useColorModeValue('white', '#0a0a0a')}>
      <Stack
        align={'center'}
        //@ts-expect-error:type fix
        spacing={{ base: 8, md: 10 }}
        gap={6}

        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={['center']}
          align={'center'}
          position={'relative'}
          width={['100%','50%']}>
          <Blob
            // w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          {!loading ? (<Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'100%'}
            overflow={'hidden'}>
       {/* CSS files for react-slick */}
       <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        size={'lg'}
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt color='white' size="60px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        size={'lg'}
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt color='white' size="60px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {img.map((card:Props_,index:number) => (
          <Box
            key={index}
            height={'300px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card?.image})`}>
            {/* This is the block you need to change, to customize the caption */}
         
          </Box>
        ))}
      </Slider>
          </Box>) : (<Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Stack gap="6" >

              <Skeleton width={'full'} height="300px" />
            </Stack>
          </Box>)}


        </Flex>
        <Stack flex={1}
          width={'full'}
          //@ts-expect-error:type fix
          spacing={{ base: 5, md: 10 }}>
          {!loading ? (<Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              {name}
            </Text>

          </Heading>) : (<Stack maxW={'full'} gap="6">


            <SkeletonText height={'50px'} noOfLines={1} />

          </Stack>)}
          {!loading ? (<Badge
            fontSize={'14px'}
            fontFamily={'Plus Jakarta Sans'}
            fontWeight={500}
          w={150}
            lineHeight={'20px'}
            letterSpacing={'0.1px'}
            borderRadius='full' py={1} px={4} >
        {badge}
          </Badge>) : (<Stack gap="6" width={100}>

            <Skeleton borderRadius={'full'} height={'40px'} />
          </Stack>)}
          {!loading ? (<Text color={'gray.500'}>
            {description}   </Text>) : (<Stack gap="6" maxW={'xs'}>

            <SkeletonText noOfLines={3} />
          </Stack>)}



          <Stack
            mt={4}
            //@ts-expect-error:type fix
            spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              as={'a'}
              //@ts-expect-error:type fix
              href="tel:+254 759622023"
            
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Enquire
            </Button>
            <Button
              as={'a'}
     //@ts-expect-error:type fix
              href="https://billing.stripe.com/p/session/live_YWNjdF8xUEdHQkNSb3Q4VFMwN3k2LF9Sa2xta2VDQVRiVDlscTlUQzF2djZxN3I3VDJXa3dk0100Kz13CPq5"
  
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Pay
            </Button>
        
          </Stack>
        </Stack>

      </Stack>
    </Container>
  )
}

// const PlayIcon = createIcon({
//   displayName: 'PlayIcon',
//   viewBox: '0 0 58 58',
//   d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
// })

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}