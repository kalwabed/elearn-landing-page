import { Box, HStack, Image } from '@chakra-ui/react'

const logos = ['/coursera.png', '/dicoding.png', '/codecademy.png', '/skillshare.png', '/udemy.png']

const Brands = () => {
  return (
    <Box w="full" px={[4, 4, 0]}>
      <HStack maxW={['full', '8xl']} justify="space-between" w="full" mx="auto">
        {logos.map(logo => (
          <Box key={logo}>
            <Image src={logo} htmlWidth={220} als="Brand logo" />
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export default Brands
