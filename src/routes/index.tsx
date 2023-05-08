import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Account } from '../pages/Account'
import { AccountInfo } from '../pages/AccountInfo'

import { AppContext } from '../components/AppContext'

export const MainRoutes = () => {
  const { state: token, isLoggedIn } = useContext(AppContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/account/:id" element={
          isLoggedIn ? <Account /> : <Home />
        }
      />
      
      <Route path="/informations" element={<AccountInfo />} />
    </Routes>
  ) 
}
