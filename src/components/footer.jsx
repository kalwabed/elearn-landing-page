import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiDribbble, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <Box as="footer" w="full" bgColor="gray.50" py={20} px={[4, 4, 0]}>
      <Grid
        templateColumns={{ sm: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }}
        gap={[12, 20]}
        maxW={['2xl', '4xl', '8xl']}
        w="full"
        mx="auto"
      >
        <GridItem colSpan={[2, null, 1]}>
          <VStack align="start">
            <Heading>
              <Link href="#">eLearn</Link>{' '}
            </Heading>
            <Text fontWeight="light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ullam, provident adipisci nobis amet libero.
            </Text>
          </VStack>
        </GridItem>

        <GridItem colSpan={1}>
          <Heading fontSize="2xl">Home</Heading>
          <VStack align="start" mt={5} fontWeight="light">
            <Link href="#">How it works</Link>
            <Link href="#">Our courses</Link>
            <Link href="#">e-Learn</Link>
            <Link href="#">Blog</Link>
          </VStack>
        </GridItem>

        <GridItem colSpan={1}>
          <Heading fontSize="2xl">Company</Heading>
          <VStack align="start" mt={5} fontWeight="light">
            <Link href="#">About us</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Mentors</Link>
            <Link href="#">Contact us</Link>
          </VStack>
        </GridItem>

        <GridItem colSpan={[2, 1]}>
          <Heading fontSize="2xl">Follow Us</Heading>
          <VStack align="start" mt={5} fontWeight="light">
            <Text>Subscribe for get updates</Text>
            <InputGroup>
              <Input placeholder="Enter email" type="email" />
              <InputRightElement w="6.5rem">
                <Button colorScheme="blue" variant="outline">
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
          <HStack mt={6} spacing={8}>
            <Icon boxSize="20px" color="blue.500" as={FiTwitter} />
            <Icon boxSize="20px" color="blue.500" as={FiLinkedin} />
            <Icon boxSize="20px" color="blue.500" as={FiFacebook} />
            <Icon boxSize="20px" color="blue.500" as={FiDribbble} />
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Footer
