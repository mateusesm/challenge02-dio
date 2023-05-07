import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Account } from '../pages/Account'
import { AccountInfo } from '../pages/AccountInfo'
import { getAllLocalStorage } from '../services/storage'
import axios from '../services/axios/axios'



export const MainRoutes = () => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const { token, isLoggedIn } = JSON.parse(getAllLocalStorage())

    if (token) {
      axios.defaults.headers.authorization = `Bearer ${token}`
    }

    if (isLoggedIn) {
      setIsLogged(isLoggedIn)
    }
  }, [isLogged])
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/account/:id" element={
          isLogged ? <Account /> : <Home />
        }
      />
      
      <Route path="/informations" element={<AccountInfo />} />
    </Routes>
  ) 
}
