import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    ...ChakraTheme.fonts,
    body: 'Inter, sans-serif',
    get heading() {
      return this.body
    }
  }
})

export default theme
