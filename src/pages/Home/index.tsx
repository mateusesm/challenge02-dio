import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Box, Center, Heading } from '@chakra-ui/react'

import { AppContext } from '../../components/AppContext'
import { FormButton } from "../../components/FormButton"
import { Card } from "../../components/Card"
import { login } from '../../services/login'

export const Home = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { state: { id, isLoggedIn }, dispatch } = useContext(AppContext)
  
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/account/${id}`)
    } else {
      navigate('/')
    }
  }, [isLoggedIn])

  const hadleValidateUser = async (email: string, password: string) => {
    const loginResponse = await login(email, password)

    if (!loginResponse) {
      return alert('Email or password invalids!')
    }

    dispatch({ type: 'LOGIN', payload: loginResponse })
    navigate(`/account/${loginResponse.id}`)
  }

  return (
    <Box minHeight='100vh' padding='25px'>
      <Card>
        <Center>
          <Heading as='h2'>Sign in</Heading>
        </Center>
        <label htmlFor="idEmail">
          E-mail
        </label>
        <Input onChange={(event) => setEmail(event.target.value)} value={email} id="idEmail" placeholder="Your email" />

        <label htmlFor="idPassword">
          Senha
        </label>
        <Input type='password' onChange={(event) => setPassword(event.target.value)} value={password} id="idPassword" placeholder="Your password" />

        <FormButton handleClick={() => hadleValidateUser(email, password)} />
      </Card>
    </Box>
  )
}