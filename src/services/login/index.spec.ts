import { login } from '.';

/*
const mockSetIsLoggedIn = jest.fn()
const mockUseNavigate = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn
  })
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate
}))
*/

describe('Tests Login', () => {

  const mockEmail = 'teste@mail.com'
  const mockInvalidEmail = 'testemail.com'
  const mockPassword = '12345'

  it('should that response to be true case can login', async () => {
    const response = await login(mockEmail, mockPassword)
    expect(response).toBeTruthy()
  })

  it('should that response to be false case can not login', async () => {
    const response = await login(mockInvalidEmail, mockPassword)
    expect(response).toBeFalsy()
  })
})