import { login } from './login';
describe('Tests Login', () => {

  const mockEmail = 'teste@mail.com'
  const mockPassword = '12345'
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('should show an alert with welcome message with email', async () => {
    await login(mockEmail, mockPassword)
    expect(mockAlert).toHaveBeenCalledWith(`Welcome, ${mockEmail}`)
  })

  it('should not show welcome message without email', async () => {
    await login(mockEmail, mockPassword)
    expect(mockAlert).not.toHaveBeenCalledWith('Welcome')
  })

  it('should show an error message if email were invalid', async () => {
    await login('haha', mockPassword)
    expect(mockAlert).toHaveBeenCalledWith('Invalid email')
  })
})