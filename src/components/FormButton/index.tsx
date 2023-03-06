import { Button } from '@chakra-ui/react'

interface Click {
  handleClick: () => void
}

export const FormButton = ({ handleClick }: Click) => {
  return (
    <Button onClick={handleClick} colorScheme='blue' color='#fff' size='sm' width='100%' marginTop='10px'>
      Entrar
    </Button>
  )
}