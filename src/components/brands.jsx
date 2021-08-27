import { Box, HStack, Image } from '@chakra-ui/react'

const logos = ['/coursera.png', '/dicoding.png', '/codecademy.png', '/skillshare.png', '/udemy.png']

const Brands = () => {
  return (
    <Box w="full">
      <HStack maxW={['full', '8xl']} justify="space-between" w="full" mx="auto">
        {logos.map(logo => (
          <Box key={logo}>
            <Image src={logo} htmlWidth={220} width={220} />
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export default Brands
