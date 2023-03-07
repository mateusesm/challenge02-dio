import { getAllLocalStorage, createLocalStorage, changeLocalStorage } from './index'

const dioBank = {
  logged: false
}

describe('Tests localStorage', () => {

  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

  it('should return an object localStorage with key dioBank', () => {
    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('dioBank')
  })

  it('should create an object localStorage', () => {
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
  })

  it('should to modify object localStorage value', () => {
    changeLocalStorage(dioBank)
    expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
  })
})