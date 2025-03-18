'use client'
import React, { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  useBreakpointValue,
  Image,
  useDisclosure,
  Collapsible,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react'
import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,

} from "@/components/ui/drawer"
import { Moon, Sun, Menu, ChevronDown } from "lucide-react"
import { useColorModeValue, useColorMode } from './ui/color-mode'
import { FaInstagram, FaTiktok  } from 'react-icons/fa'

type Iprops = {
  children: ReactNode;

};
const App = ({ children }: Iprops) => {
  const [open, setOpen] = useState(false)
  const { toggleColorMode, colorMode } = useColorMode()
  console.log('color mode', colorMode)

  return (
    <>
      <Box >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          justifyContent={'space-evenly'}
          align={'center'}>
          <Flex

            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={() => setOpen(true)}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            >
              {open ? <Moon /> : <Menu />}
            </IconButton>
          </Flex>
          <Flex 
                  alignItems={'center'} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'center' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Bahari Tours & Homes
            </Text>
                {/* <Image h={35}  src={'logo.jpeg'} alt={'logo'} /> */}
                

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Box>
            {/* switcher button */}
            <IconButton
              onClick={toggleColorMode}

              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            >
              {colorMode === 'light' ? <Sun /> : <Moon />}
            </IconButton>

          </Box>
        </Flex>
        <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement={'start'}>
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerBody>
              <MobileNav />
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Box>
      <Box bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')} >
        {children}
      </Box>
      <Box
      mt={4}
      px={4}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
    <Flex    py={4}justifyContent={'space-between'}>

  
            <Image h={35} w={35} src={'logo.png'} alt={'logo'} />
        <Text>© 2025 Bahari Tours & Homes . All rights reserved</Text>
        <Stack direction={'row'} 
         //@ts-expect-error:type fix
        spacing={6}>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/'}>
            <FaInstagram />
          </SocialButton>

          <SocialButton label={'Tiktok'} href={'https://www.tiktok.com/'}>
            <FaTiktok />
          </SocialButton>
          {/* <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton> */}

        </Stack>
        </Flex>
    </Box>
    </>
  )
}


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
       //@ts-expect-error:type fix
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <>
      <Stack direction={'row'}
        //@ts-expect-error:typefix
        spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>

            <PopoverRoot >
              <PopoverTrigger >
                <Flex
                  justifyContent={'center'}
                  alignItems={'center'}>

                  <Box
                    //@ts-expect-error:typefix
                    as={navItem?.href ? 'a' : 'box'}
                    p={2}

                    href={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>
                    {navItem.label}
                  </Box>

                  {navItem.children && (<ChevronDown />)}

                </Flex>

              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  color={textColor}
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </PopoverRoot>
          </Box>
        ))}
      </Stack>

    </>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      //@ts-expect-error:fix
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>

          {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
          <ChevronDown />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { open, onToggle } = useDisclosure()

  return (
    <Stack
      //@ts-expect-error:fix
      spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        //@ts-expect-error:fix
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Flex gap={4}>
          <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <ChevronDown />
          )}
        </Flex>

      </Box>
      <Collapsible.Root open={open} unmountOnExit>
        <Collapsible.Trigger />
        <Collapsible.Content>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Box as="a" key={child.label} py={2}
                  //@ts-expect-error:fix
                  href={child.href}>
                  {child.label}
                </Box>
              ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Locations',
    children: [
      {
        label:'Bamburi',
        href: `/items`,
      },
      {
        label: 'Nyali',
        href: `/category/nyali`,
      },
      {
        label: 'Town',
        href: `/category/town`,
      },
      {
        label: 'Diani',
        href: '/category/diani',
      },
      
   
    ],
  },

  {
    label: 'About Us',
    href: '/about/',
  },
  {
    label: 'Contact Us',
    href: '/contact/',
  },
  {
    label: 'Gallery',
    href: '/gallery/',
  },
]
export default App;