import { Box, Button, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react'

const navs = ['Home', 'Courses', 'E-Learn', 'Blogs']

const TopNavigation = () => {
  return (
    <Box py={6} px={4} w="full" bgColor="gray.50">
      <Flex w="full" maxW={['full', '8xl']} mx="auto" justify="space-between" align="center">
        <Text fontWeight="bold" fontSize="2xl">
          eLearn
        </Text>
        <HStack as="ul">
          {navs.map(nav => (
            <Box as="li" listStyleType="none" key={nav}>
              <Button variant="ghost">{nav}</Button>
            </Box>
          ))}
        </HStack>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={1}>
            <Button variant="ghost">Login</Button>
          </GridItem>
          <GridItem colSpan={1}>
            <Button variant="outline" colorScheme="gray">
              Register
            </Button>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  )
}

export default TopNavigation
