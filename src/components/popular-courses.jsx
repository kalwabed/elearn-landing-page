import 'swiper/css/pagination'
import { Box, Button, Heading, HStack, Image, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/react'
import { Pagination, Lazy, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const courseCategories = [
  'Freelance',
  'Health',
  'Business',
  'Engineering',
  'Digital Media',
  ' Journalism',
  'Language',
  'See All'
]

const courses = [
  {
    title: 'e-commerce Business',
    imageUrl: 'https://source.boringavatars.com/bauhaus/100/e%20Business?colors=2B6CB0,EB506E,e9c46a,f4a261,e76f51',
    instructor: {
      pictureUrl: 'https://www.fakepersongenerator.com/Face/male/male1084651114594.jpg',
      name: 'Mario P Hodge'
    }
  },
  {
    title: 'Real-estate Business',
    imageUrl: 'https://source.boringavatars.com/bauhaus/100/real%20estate?colors=2B6CB0,EB506E,e9c46a,f4a261,e76f51',
    instructor: {
      pictureUrl: 'https://www.fakepersongenerator.com/Face/female/female20171026170569031.jpg',
      name: 'Beatris C Booth'
    }
  },
  {
    title: 'Travel Business',
    imageUrl:
      'https://source.boringavatars.com/bauhaus/100/travel%20Business?colors=2B6CB0,EB506E,e9c46a,f4a261,e76f51',
    instructor: {
      pictureUrl: 'https://www.fakepersongenerator.com/Face/male/male2017108672183405.jpg',
      name: 'Tyrone M griffin'
    }
  },
  {
    title: 'Tech Business',
    imageUrl: 'https://source.boringavatars.com/bauhaus/100/tech%20Business?colors=2B6CB0,EB506E,e9c46a,f4a261,e76f51',
    instructor: {
      pictureUrl: 'https://www.fakepersongenerator.com/Face/male/male20161083822903747.jpg',
      name: 'Anthony F Easter'
    }
  },
  {
    title: 'UMKM Business',
    imageUrl: 'https://source.boringavatars.com/bauhaus/100/umkm%20Business?colors=2B6CB0,EB506E,e9c46a,f4a261,e76f51',
    instructor: {
      pictureUrl: 'https://www.fakepersongenerator.com/Face/male/male1084591240448.jpg',
      name: 'Edwin T Mayfield'
    }
  }
]

const PopularCourses = () => {
  return (
    <Box maxW={['full', '8xl']} w="full" mx="auto" my={20}>
      <VStack justify="center" spacing={5}>
        <Heading borderBottom="3px solid black">Our Most Popular Courses</Heading>
        <Text color="gray.500" textAlign="center" w="40%">
          It&apos;s a long estabilished fact that a reader will be distracted by the readable of a page when looking at
          it&apos;s layout
        </Text>
      </VStack>

      <HStack justify="space-between" mt={10}>
        {courseCategories.map(key => (
          <Box key={key} colSpan={1}>
            <Button colorScheme="blue" variant={key === 'Business' ? 'solid' : 'ghost'} size="lg">
              {key}
            </Button>
          </Box>
        ))}
      </HStack>

      <Box my={14}>
        <Swiper modules={[Pagination, A11y, Lazy]} pagination={{ clickable: true }} spaceBetween={80} slidesPerView={3}>
          {courses.map(key => (
            <SwiperSlide key={key.title}>
              <CourseCard {...key} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <style jsx global>{`
        .swiper-pagination-bullet {
          padding: 0.65rem;
        }
      `}</style>
    </Box>
  )
}

const CourseCard = ({ imageUrl, title, instructor }) => {
  const { name, pictureUrl } = instructor

  return (
    <LinkBox py={8} px={4} w="full" rounded="md" _hover={{ bgColor: 'gray.50', shadow: 'lg' }}>
      <Image src={imageUrl} />

      <VStack align="start" flexDir="column" mt={4}>
        <Heading as="h3" fontSize="xl">
          <LinkOverlay href="#">{title}</LinkOverlay>
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quaerat iusto repudiandae sit tempora
        </Text>
      </VStack>

      <HStack w="full" mt={3} py={3} borderBottom="1px solid" borderBottomColor="gray.300">
        <Image src={pictureUrl} rounded="full" boxSize={10} />
        <Text as="b" fontSize="lg" fontWeight="semibold">
          {name}
        </Text>
      </HStack>

      <HStack justify="space-between" py={1}>
        <Text fontSize="sm" as="small" color="gray.500">
          $150
        </Text>
        <Text fontSize="sm" as="small" color="gray.500">
          180+ Courses
        </Text>
        <Text fontSize="sm" as="small" color="gray.500">
          3.2K+ Reviews
        </Text>
      </HStack>
    </LinkBox>
  )
}

export default PopularCourses
