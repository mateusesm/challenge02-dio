import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Heading, Center, Spacer, Button } from '@chakra-ui/react'

import { AppContext } from '../AppContext'
import { getAllLocalStorage } from '../../services/storage'

export const Header = () => {
  const { state: { isLoggedIn }, dispatch } = useContext(AppContext)

  const navigate = useNavigate()

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <Flex backgroundColor='#022449' padding='10px'>
      <Center fontSize='3xl'>
        <Heading color='#fff' as='h1'>
          Dio Bank
        </Heading>
      </Center>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Center>
              <Button onClick={logout}>
                Exit
              </Button>
            </Center>
          </>
        )
      } 
    </Flex>
  )
}