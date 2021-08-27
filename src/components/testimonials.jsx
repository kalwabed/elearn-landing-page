import 'swiper/css/pagination'
import { Box, Button, Flex, Heading, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { HiStar } from 'react-icons/hi'
import { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonies = [
  {
    pictureUrl: '/testimony-soleh.jpg',
    name: 'Lukas Petrus',
    role: 'Business man',
    title: 'Amazing courses'
  },
  {
    pictureUrl: '/testimony-putra.jpg',
    name: 'Putra Peter',
    role: 'Lawyer',
    title: 'So beautiful courses'
  },
  {
    pictureUrl: '/testimony-billy.jpg',
    name: 'Billy Wong',
    role: 'Entrepreneur',
    title: 'Amazing courses'
  }
]

const Testimonials = () => {
  return (
    <Box maxW={['full', '8xl']} w="full" mx="auto" py={48}>
      <Flex justify="space-between">
        <Heading fontSize="5xl" textTransform="capitalize">
          What people says about courses?
        </Heading>
        <Button size="lg" colorScheme="blue">
          View All Testimonial
        </Button>
      </Flex>

      <Swiper modules={[A11y, Pagination]} pagination={{ clickable: true }} slidesPerView={2} spaceBetween={50}>
        {testimonies.map(testimo => (
          <SwiperSlide key={testimo.pictureUrl}>
            <Testimony {...testimo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

const Testimony = ({ pictureUrl, name, title, role }) => {
  return (
    <Box mt={8} p={5} shadow="lg">
      <HStack align="start" spacing={6}>
        <VStack align="start">
          <Image src={pictureUrl} alt="images from unsplash" htmlWidth={900} />
          <Heading fontSize="3xl" fontWeight="medium">
            {name}
          </Heading>
          <Text fontSize="xl" color="gray.500">
            {role}
          </Text>
        </VStack>
        <Box>
          <Heading fontWeight="medium">{title}</Heading>
          <HStack>
            {[1, 2, 3, 4, 5].map(key => (
              <Icon key={key} as={HiStar} color="orange.300" boxSize="30px" />
            ))}
          </HStack>
          <Text mt={10} color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis non tempora nostrum magni,
            corrupti quaerat aspernatur suscipit sint, inventore quidem aut? Architecto in nemo voluptates dignissimos,
            libero repellendus dolor.
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default Testimonials
