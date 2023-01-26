'use client';
import { ChakraProvider } from "@chakra-ui/react";

function ChakraWrapper({ children }:any) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default ChakraWrapper