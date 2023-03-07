import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Account } from '../Pages/Account'
import { AccountInfo } from '../Pages/AccountInfo'
import { AppContext } from '../components/AppContext'


export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext)

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
