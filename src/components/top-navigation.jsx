import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

const navs = ['Home', 'Courses', 'E-Learn', 'Blogs']

const TopNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box py={6} px={[4, 4, 0]} w="full" bgColor="gray.50">
      <Flex w="full" maxW={['full', '8xl']} mx="auto" justify="space-between" align="center">
        <Text fontWeight="bold" fontSize="2xl">
          eLearn
        </Text>
        <HStack display={['none', 'flex']} as="ul">
          {navs.map(nav => (
            <Box as="li" listStyleType="none" key={nav}>
              <Button variant="ghost">{nav}</Button>
            </Box>
          ))}
        </HStack>
        <Grid display={['none', null, 'grid']} templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={1}>
            <Button variant="ghost">Login</Button>
          </GridItem>
          <GridItem colSpan={1}>
            <Button variant="outline" colorScheme="gray">
              Register
            </Button>
          </GridItem>
        </Grid>

        <IconButton
          display={['flex', null, 'none']}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu Utama</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={10}>
                {navs.map(nav => (
                  <Link key={nav} href="#">
                    {nav}
                  </Link>
                ))}
                <Grid templateColumns="repeat(2, 1fr)">
                  <GridItem colSpan={1}>
                    <Button variant="ghost">Login</Button>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Button variant="outline" colorScheme="gray">
                      Register
                    </Button>
                  </GridItem>
                </Grid>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default TopNavigation
