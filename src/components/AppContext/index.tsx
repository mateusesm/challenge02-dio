import { createContext, useState, useEffect, useReducer } from "react"

import { getAllLocalStorage, changeLocalStorage } from "../../services/storage"

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
      changeLocalStorage({ ...state, id: action.payload.id, token: action.payload.token, isLoggedIn: true })
      return { ...state, id: action.payload.id, token: action.payload.token, isLoggedIn: true }
    }
  }

  return { ...state }
}

const AppContextProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, globalState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
