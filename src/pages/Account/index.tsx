import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'

import { CardInfo } from '../../components/CardInfo'
import axios from '../../services/axios/axios'
import { getAllLocalStorage } from '../../services/storage'

interface User {
  id: string
  name: string
  email: string
  balance: number
}

export const Account = () => {
  const [userData, setUserData] = useState<User>({ id: '', name: '', email: '', balance: 0 })
  const { id } = useParams()
  const navigate = useNavigate()
  const { token, isLoggedIn } = JSON.parse(getAllLocalStorage())

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`/user/${id}`)
        setUserData(data)
  
        if (id !== data.id) {
          navigate('/')
        }
      } catch (err: any) {
        console.log(err.response.data.message)
      }
     
    }

    getData()
  }, [id])

  if (!isLoggedIn) {
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