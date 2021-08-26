import { ChakraProvider } from '@chakra-ui/react'

import LayoutRoot from 'components/layout-root'
import theme from 'utils/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutRoot>
        <Component {...pageProps} />
      </LayoutRoot>
    </ChakraProvider>
  )
}

export default MyApp
