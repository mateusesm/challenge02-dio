import { api } from "../../mockApi/api"

export const login = async (email: string, password: string): Promise<boolean> => {
  const data: any = await api

  if (email !== data.email) {
    return false
  }

  return true
}