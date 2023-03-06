import { Box } from '@chakra-ui/react'

interface ICardInfo {
  text: string
}

export const CardInfo = ({ text }: ICardInfo) => {
  return (
    <Box
      as='h1'
      backgroundColor='#fff'
      borderRadius={20}
      minHeight='30vh'
      padding={4}>
      {text}
    </Box>
  )
}