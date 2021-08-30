import { Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'

const BannerNeedHelp = () => {
  return (
    <Box maxW={['full', '8xl']} w="full" mx="auto" py={20}>
      <Stack
        direction={['column', null, 'row']}
        justify="space-between"
        align="center"
        py={16}
        px={[4, 4, 16]}
        bgColor="green.100"
        rounded="sm"
        spacing={4}
      >
        <VStack align="start">
          <Heading fontSize={['4xl', '7xl']}>Need our help?</Heading>
          <Text w={['full', '75%']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, reiciendis?</Text>
        </VStack>

        <Button size="lg" colorScheme="blue">
          Register Now
        </Button>
      </Stack>
    </Box>
  )
}

export default BannerNeedHelp
