import { login } from './login';
describe('Tests Login', () => {

  const name = 'Mateus'
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('should show an alert with welcome + name', () => {
    login(name)
    expect(mockAlert).toHaveBeenCalled()
    expect(mockAlert).toHaveBeenCalledWith('Welcome, Mateus!')
  })
})