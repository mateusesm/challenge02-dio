import { GlobalState } from '../../components/AppContext'

export const getAllLocalStorage = (): string | any => {
  return localStorage.getItem('dioBank')
}

export const createLocalStorage = (object: GlobalState): void => {
  localStorage.setItem('dioBank', JSON.stringify(object))
}

export const changeLocalStorage = (object: GlobalState): void => {
  localStorage.setItem('dioBank', JSON.stringify(object))
}