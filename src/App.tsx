import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { Layout } from './components/Layout'

import { Home } from './Pages/Home'
import { Account } from './Pages/Account'

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  )
}