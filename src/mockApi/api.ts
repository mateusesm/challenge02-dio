const account = {
  id: '1',
  name: 'Mateus',
  email: 'teste@mail.com',
  balance: 2000.00
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account)
  }, 3000)
})