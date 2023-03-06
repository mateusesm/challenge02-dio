import { ChakraProvider, Box} from '@chakra-ui/react'

import { Layout } from './components/Layout'
import { Card } from "./components/Card"

export function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#2F74C0' padding='25px'>
          <Card />
        </Box> 
      </Layout> 
    </ChakraProvider> 
  )
}