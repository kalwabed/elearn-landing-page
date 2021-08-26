import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Text,
  VStack
} from '@chakra-ui/react'
import { HiSearch } from 'react-icons/hi'

const Hero = () => {
  return (
    <Box w="full" bgGradient="linear(to-t, gray.100, gray.50)" py={6}>
      <Grid maxW={['full', '8xl']} w="full" mx="auto" templateColumns="repeat(2,1fr)" alignItems="center">
        <GridItem colSpan={1}>
          <VStack align="start" spacing={6}>
            <Heading as="h1" fontWeight="semibold" fontSize="6xl">
              Learn Anything, Anytime, Anywhere
            </Heading>

            <Text color="gray.500" w="75%">
              It&apos;s a long estabilished fact that a reader will be distracted by the readable of a page when looking
              at it&apos;s layout
            </Text>

            <InputGroup w="75%" size="lg">
              <Input pr="7.5rem" placeholder="Course name" bgColor="white" />
              <InputRightElement w="6rem" mr="2">
                <Button leftIcon={<HiSearch />} size="sm" colorScheme="blue">
                  Search
                </Button>{' '}
              </InputRightElement>
            </InputGroup>
          </VStack>

          <VStack align="start" mt={16} spacing={5}>
            <Heading fontWeight="medium">Download App</Heading>
            <HStack>
              <HStack bgColor="white" p={3} rounded="lg">
                <Image boxSize="50px" src="/apple-logo.png" />
                <Flex flexDir="column">
                  <Text color="gray.500">Download on the</Text>
                  <Text as="b" fontWeight="bold">
                    Apple Store
                  </Text>
                </Flex>
              </HStack>

              <HStack bgColor="white" p={3} rounded="lg">
                <Image boxSize="50px" src="/play-store-logo.png" />
                <Flex flexDir="column">
                  <Text color="gray.500">Get it from</Text>
                  <Text as="b" fontWeight="bold">
                    Google Play
                  </Text>
                </Flex>
              </HStack>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={1} ml="auto">
          <Image src="/e-learning-colored.png" htmlWidth={600} title="Illustrations by PixelTrue" />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Hero
