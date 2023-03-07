const account = {
  email: 'teste@mail.com',
  password: '12345',
  name: 'Mateus',
  balance: 2000.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account)
  }, 3000)
})