const account = {
  email: 'teste@mail.com',
  password: '12345',
  name: 'teste',
  balance: 2000
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account)
  }, 3000)
})