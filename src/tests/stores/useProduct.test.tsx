import { renderHook, cleanup, act, waitFor } from '@testing-library/react'
import { useProductStore } from '../../stores/productStore'

afterEach(cleanup)
beforeEach(async () => {
  await waitFor(() => {
    const { result } = renderHook(() => useProductStore())
    result.current.reset()
  })
})

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
    expect(result.current.total).toBe(0)
    act(() => {
      result.current.addItem('product')
    })
    expect(result.current.total).toBe(1)
    act(() => {
      result.current.removeItem('product')
    })
    expect(result.current.total).toBe(0)
  })
})
