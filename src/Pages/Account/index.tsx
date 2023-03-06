import { useState, useEffect } from 'react'
import { Center, SimpleGrid } from '@chakra-ui/react'

import { CardInfo } from '../../components/CardInfo'
import { api } from '../../mockApi/api'

interface IUser {
  email: string
  password: string
  name: string
  balance: number
}

export const Account = () => {

  const [userData, setUserData] = useState<null | IUser>(null)

  useEffect(() => {
    const getData = async () => {
      const data: any | IUser = await api
      setUserData(data)
    }

    getData()
  }, [])

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text='Informações de acesso' />
        <CardInfo text='Informações da conta' />
      </SimpleGrid>
    </Center>
  )
}