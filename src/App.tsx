import { ChakraProvider, Box} from '@chakra-ui/react'

import { Header } from "./components/Header"
import { Card } from "./components/Card"

export function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#2F74C0' padding='25px'>
        <Header />
        <Card />
      </Box>  
    </ChakraProvider> 
  )
}