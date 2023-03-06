import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IClick {
  handleClick: MouseEventHandler
}

export const FormButton = ({ handleClick }: IClick) => {
  return (
    <Button onClick={handleClick} colorScheme='blue' color='#fff' size='sm' width='100%' marginTop='10px'>
      Entrar
    </Button>
  )
}