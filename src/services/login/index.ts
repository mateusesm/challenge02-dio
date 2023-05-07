import axios from '../axios/axios'

export const login = async (email: string, password: string): Promise<boolean | object> => {
  try {
    const { data: { id, token } } = await axios({
      method: 'post',
      url: '/login',
      data: {
        email,
        password
      }
    })
  
    if (!token) {
      return false
    }
  
    axios.defaults.headers.authorization = `Bearer ${token}`
    
    return { id, token }
  } catch (err: any) {
    console.log(err.message)
    return false
  }
}

// Preciso colocar o id do usuário no estado global da aplicação no context
// para que a página de account tenha acesso para fazer a requisição e obter os dados do usuário
// Também preciso dar um jeito de criptografar a senha que vai para o banco de dados