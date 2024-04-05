import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const config = {
    initialColorMode: 'light', // 'dark' | 'light'
    useSystemColorMode: false,
  }


  return (
    <Html lang="en">
      <Head />
      <body>
      <ColorModeScript initialColorMode={config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
     
    </Html>
  );
}
