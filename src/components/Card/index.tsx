import { useState } from 'react'
import { Input, Box, Center, Heading } from '@chakra-ui/react'

import { FormButton } from "../FormButton"
import { login } from '../../services/login'

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Box backgroundColor='#fff' borderRadius='25px' padding='25px'>
      <Center>
        <Heading as='h2'>Faça seu login</Heading>
      </Center>
      <label htmlFor="idEmail">
        E-mail
      </label>
      <Input onChange={(event) => setEmail(event.target.value)} value={email} id="idEmail" placeholder="Seu Email" />

      <label htmlFor="idPassword">
        Senha
      </label>
      <Input onChange={(event) => setPassword(event.target.value)} value={password} id="idPassword" placeholder="Sua senha" />

      <FormButton handleClick={() => login(email, password)} />
    </Box>
  )
}