import axios from '../axios/axios'

export const login = async (email: string, password: string): Promise<boolean> => {
  const { data } = await axios({
    method: 'post',
    url: '/login',
    data: {
      email,
      password
    }
  })

  if (!data.token) {
    return false
  }

  axios.defaults.headers.authorization = `Bearer ${data.token}`
  return true
}