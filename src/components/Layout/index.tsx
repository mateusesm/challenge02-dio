import { Box } from "@chakra-ui/react"

import { Header } from "../Header"
import { Footer } from "../Footer"

export const Layout = ({ children }: any) => {
  return (
    <Box minHeight='100vh' backgroundColor='#2F74C0'>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}