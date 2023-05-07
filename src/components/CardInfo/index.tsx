import { Box, Text } from '@chakra-ui/react'

interface CardInfo {
  mainContent: string,
  content: string
}

export const CardInfo = ({ mainContent, content }: CardInfo) => {
  return (
    <Box
      as='h1'
      backgroundColor='#fff'
      borderRadius={20}
      minHeight='30vh'
      padding={4}>
      <Text fontSize='2xl' fontWeight='bold'>{mainContent}</Text>
      <Text fontSize='xl'>{content}</Text>
    </Box>
  )
}