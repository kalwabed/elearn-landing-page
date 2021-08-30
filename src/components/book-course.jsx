import { Box, Button, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'

const BookOurCourse = () => {
  return (
    <Box pos="relative" maxW={['full', '8xl']} w="full" mx="auto" py={10} my={[12, null, 20]}>
      <Flex flexDir={['column', null, 'row']} justify="space-between" align="center">
        <Image
          pos="relative"
          display={['none', null, 'block']}
          src="/book-course.jpg"
          alt="Photo by Road Trip with Raj on Unsplash"
          htmlWidth={800}
          zIndex={30}
          shadow="md"
        />
        <VStack align="start" spacing={10} ml={[0, null, 12]} px={[4, 4, 0]}>
          <Heading textTransform="capitalize" fontSize={['4xl', '6xl']}>
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

        <Stack
          direction={['column', null, 'row']}
          mt={[10, null, 0]}
          spacing={16}
          w="full"
          color="white"
          justify="flex-end"
          pos={['initial', null, 'absolute']}
          bottom="-85px"
          bgColor="blue.800"
          p={10}
        >
          <Box>
            <Heading fontSize={['4xl', null, '2xl']} textDecor="underline">
              2.5K+
            </Heading>
            <Text mt={3}>Online Courses</Text>
          </Box>
          <Box>
            <Heading fontSize={['4xl', null, '2xl']} textDecor="underline">
              500
            </Heading>
            <Text mt={3}>Experience Mentors</Text>
          </Box>
          <Box>
            <Heading fontSize={['4xl', null, '2xl']} textDecor="underline">
              1.8M+
            </Heading>
            <Text mt={3}>Rating & Reviews</Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default BookOurCourse
