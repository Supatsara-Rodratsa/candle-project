import { renderHook, cleanup, act } from '@testing-library/react'
import { useProductStore } from '../../stores/productStore'

afterEach(cleanup)
describe('Test Stores', () => {
  it('Should init total selected product as 0', () => {
    const { result } = renderHook(() => useProductStore())
    expect(result.current.total).toBe(0)
  })

  it('Should be able to increase product', () => {
    const { result } = renderHook(() => useProductStore())
    act(() => {
      result.current.addItem('product')
    })
    expect(result.current.total).toBe(1)
  })

  it('Should be able to decrease product', () => {
    const { result } = renderHook(() => useProductStore())
    act(() => {
      result.current.removeItem('product')
    })
    expect(result.current.total).toBe(0)
  })
})
