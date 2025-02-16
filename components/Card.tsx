// import { StarIcon } from '@chakra-ui/icons'
import { Box, Image, Badge ,Icon} from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode'
import { FaStar } from "react-icons/fa";

export function Card() {
    
    const property = {
        imageUrl: 'data:image/jpeg;base64,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',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Chill Spot',
        formattedPrice: '1km',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image h={100} width={'100%'} src={property.imageUrl} alt={property.imageAlt} />

            <Box p='4'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        Beach Tours
                    </Badge>

                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'

                >
                    Kisite Mpunguti
                </Box>

              

                    {/* <Box as='span' fontSize='xs' color='gray.600' >
                        1 km away
                    </Box> */}

            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                Ksh
              </Box>
            5,000
            </Box>
          
            

                <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
            .fill('')
            .map((_, i) => (

              <Icon  key={i} fontSize="12px" color={i < property?.rating ? '#171717' : 'gray.300'}>
                <FaStar />
              </Icon>

            ))}
                    {/* {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))} */}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}