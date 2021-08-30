import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Text, VStack, chakra, Link } from '@chakra-ui/react'

const mentors = [
  { name: 'Luis Saputra', role: 'Business mentor', pictureUrl: '/mentor-james.jpg' },
  { name: 'James Purwanto', role: 'Freelance mentor', pictureUrl: '/mentor-khan.jpg' },
  { name: 'Gary Nugroho', role: 'Engineering mentor', pictureUrl: '/mentor-luis.jpg' }
]

const Mentors = () => {
  return (
    <Box my={[10, 20]} py={20} bgColor="blue.800" color="white">
      <VStack maxW={['full', '8xl']} px={[4, 4, 0]} w="full" align={['center', null, 'start']} mx="auto" spacing={12}>
        <Heading w={['full', null, '50%']} fontSize={['5xl', '6xl']} textTransform="capitalize">
          Meet with our professional mentors
        </Heading>

        <Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)']} gap={10}>
          {mentors.map(mentor => (
            <GridItem key={mentor.pictureUrl} colSpan={1}>
              <Mentor {...mentor} />
            </GridItem>
          ))}
        </Grid>
        <Flex w="full" align="center" justify="center">
          <Link href="#">View all mentors</Link>
        </Flex>
      </VStack>
    </Box>
  )
}

const Mentor = ({ name, pictureUrl, role }) => {
  return (
    <Box>
      <VStack p={4} bgColor="white" color="black" roundedTop="sm">
        <Image src={pictureUrl} alt="Image from unsplah" boxSize={[300, 500]} rounded="sm" />
        <Heading>{name}</Heading>
        <Text fontSize="sm">{role}</Text>
      </VStack>
      <Flex
        p={4}
        borderTop="1px solid"
        borderTopColor="gray.100"
        justify="space-between"
        align="center"
        w="full"
        bgColor="white"
        color="black"
        roundedBottom="sm"
      >
        <HStack>
          <Text>3.2K+</Text> <Text fontWeight="light">Reviews</Text>
        </HStack>

        <chakra.span w={0.5} border="1px solid" borderColor="gray.100" h={5} />

        <HStack>
          <Text>180+</Text> <Text fontWeight="light">Courses</Text>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Mentors
