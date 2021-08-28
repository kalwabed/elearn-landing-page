import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'

const BannerNeedHelp = () => {
  return (
    <Box maxW={['full', '8xl']} w="full" mx="auto" py={20}>
      <HStack justify="space-between" align="center" p={16} bgColor="green.100">
        <VStack align="start">
          <Heading fontSize="7xl">Need our help?</Heading>
          <Text w="75%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis?</Text>
        </VStack>

        <Button size="lg" colorScheme="blue">
          Register Now
        </Button>
      </HStack>
    </Box>
  )
}

export default BannerNeedHelp
