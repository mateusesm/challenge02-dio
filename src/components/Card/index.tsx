import { useState } from 'react'
import { Input, Box, Center, Heading } from '@chakra-ui/react'

import { FormButton } from "../FormButton"
import { login } from '../../services/login'

export const Card = () => {
  const [name, setName] = useState('')

  return (
    <Box backgroundColor='#fff' borderRadius='25px' padding='25px'>
        <Center>
          <Heading as='h2'>Faça o login</Heading>
        </Center>
        <label htmlFor="idEmail">
          E-mail
        </label>
        <Input onChange={(event) => setName(event.target.value)} id="idEmail" placeholder="Seu Email" />

        <label htmlFor="idPassword">
          Senha
        </label>
        <Input id="idPassword" placeholder="Sua senha" />

        <FormButton handleClick={() => login(name)} />
    </Box>
  )
}