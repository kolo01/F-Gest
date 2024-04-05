import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  
// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

  return (
    <ChakraProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraProvider>
  );
}
