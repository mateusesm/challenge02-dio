import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react'

import { CardInfo } from '../../components/CardInfo'
import { AppContext } from '../../components/AppContext'

import axios from '../../services/axios/axios'

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
  const { state: { token, isLoggedIn }, dispatch } = useContext(AppContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(`/user/${id}`)
        setUserData(data)
  
        if (id !== data.id) {
          navigate('/')
        }

        if (!isLoggedIn) {
          navigate('/')
        }
      } catch (err: any) {
        console.log(err.response.data.message)
      }
     
    }

    getData()
  }, [id, isLoggedIn])

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