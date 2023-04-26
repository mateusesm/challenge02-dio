import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'

import { AppContext } from '../../components/AppContext'
import { CardInfo } from '../../components/CardInfo'
import axios from '../../services/axios/axios'
import { api } from '../../mockApi/api'

interface IUser {
  id: string
  name: string
  email: string
  balance: number
}

export const Account = () => {
  const [userData, setUserData] = useState<null | IUser>(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const context = useContext(AppContext)

  useEffect(() => {
    const getData = async () => {
      const data: any = await api
      setUserData(data)
    }

    getData()
  }, [])

  if (!context.isLoggedIn) {
    navigate('/')
  }

  if (userData && id !== userData.id) {
    navigate('/')
  }

  const actualDate = new Date().toLocaleString()

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          !userData ? <Center><Spinner size='xl' color='#fff' /></Center> :
          <>
            <CardInfo mainContent={`Welcome ${userData?.name}`} content={`${actualDate}`}/>
            <CardInfo mainContent='Balance' content={`${userData.balance.toLocaleString('pt-br')}`} />
          </>
        }
      </SimpleGrid>
    </Center>
  )
}