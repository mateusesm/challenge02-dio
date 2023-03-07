import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { MainRoutes } from './routes'
import AppContextProvider from './components/AppContext'
import { Layout } from './components/Layout'
import { createLocalStorage, getAllLocalStorage } from './services/storage'

export function App() {
  if (!getAllLocalStorage()) {
    createLocalStorage()
  }

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
           <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}