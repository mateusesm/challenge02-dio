import { createContext, useEffect, useReducer, useRef } from "react"

import { changeLocalStorage, getAllLocalStorage, createLocalStorage } from "../../services/storage"

import axios from '../../services/axios/axios'

export interface GlobalState {
  id: string,
  token: string
  isLoggedIn: boolean,
}

export const globalState: GlobalState = {
  id: '',
  token: '',
  isLoggedIn: false
}

export const AppContext = createContext({})

const reducer = (state: object, action: object) => {
  switch (action.type) {
    case 'LOGIN': {
      const newState = { ...state, id: action.payload.id, token: action.payload.token, isLoggedIn: true }
      changeLocalStorage(newState)
      return newState
    }
    case 'LOGOUT': {
      const newState = { id: '', token: '', isLoggedIn: false }
      changeLocalStorage(newState)
      return newState
    }
  }

  return { ...state }
}

const AppContextProvider = ({children}: any) => {
  const storage = useRef(JSON.parse(getAllLocalStorage()))

  useEffect(() => {
    if (storage.current.isLoggedIn) {
      globalState.id = storage.current.id
      globalState.token = storage.current.token
      globalState.isLoggedIn = storage.current.isLoggedIn
  
      axios.defaults.headers.authorization = `Bearer ${storage.current.token}`
    } else {
      createLocalStorage(globalState) 
    }

  }, [storage.current.isLoggedIn, globalState])

  const [state, dispatch] = useReducer(reducer, globalState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
