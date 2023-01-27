import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import adobeLoader from "../../adobeLoader";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, [])
    
  return(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
      )
}
