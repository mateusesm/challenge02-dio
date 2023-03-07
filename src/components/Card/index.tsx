import { Box, Flex } from '@chakra-ui/react'

export const Card = ({ children }: any) => {
  return (
    <Flex justifyContent='center'>
      <Box maxWidth='420px' backgroundColor='#fff' borderRadius='25px' padding='25px'>
        {children}
      </Box>
    </Flex>
  )
}