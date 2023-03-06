import { api } from "../mockApi/api"

export const login = async (email: string, password: string): Promise<void> => {
  const data: any = await api

  if (email !== data.email) {
    return alert('Invalid email')
  }

  alert(`Welcome, ${email}`)
}