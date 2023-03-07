interface IDioBank {
  logged: boolean
}

const dioBank = {
  logged: false
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('dioBank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('dioBank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (object: IDioBank): void => {
  localStorage.setItem('dioBank', JSON.stringify(object))
}