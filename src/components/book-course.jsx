import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const BookOurCourse = () => {
  return (
    <Box pos="relative" maxW={['full', '8xl']} w="full" mx="auto" py={10} my={20}>
      <Flex justify="space-between" align="center">
        <Image
          pos="relative"
          src="/book-course.jpg"
          alt="Photo by Road Trip with Raj on Unsplash"
          htmlWidth={800}
          zIndex={30}
        />
        <VStack align="start" spacing={10} ml={12}>
          <Heading textTransform="capitalize" fontSize="6xl">
            Book our course & improve your skill
          </Heading>
          <Text fontWeight="light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa provident placeat, reiciendis sapiente
            inventore magni odit optio dolores, tempora non nihil. Aliquid obcaecati repellat libero nesciunt totam
            eligendi natus tempore.
          </Text>
          <Button colorScheme="blue" size="lg">
            Read More
          </Button>
        </VStack>

        <HStack
          spacing={16}
          w="full"
          color="white"
          justify="flex-end"
          pos="absolute"
          bottom="-85px"
          bgColor="blue.800"
          p={12}
        >
          <Box>
            <Heading textDecor="underline">2.5K+</Heading>
            <Text mt={3}>Online Courses</Text>
          </Box>
          <Box>
            <Heading textDecor="underline">500</Heading>
            <Text mt={3}>Experience Mentors</Text>
          </Box>
          <Box>
            <Heading textDecor="underline">1.8M+</Heading>
            <Text mt={3}>Rating & Reviews</Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}

export default BookOurCourse
