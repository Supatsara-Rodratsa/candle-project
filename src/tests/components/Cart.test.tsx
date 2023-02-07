import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { CartProps, Cart } from '../../components/Cart'

const makeSut = (props: Partial<CartProps>) => {
  return render(<Cart totalProducts={1} onClick={jest.fn()} {...props} />)
}

afterEach(cleanup)
describe('Cart Component', () => {
  it('Should render total product if total product is greater than 0', () => {
    const { getByText } = makeSut({ totalProducts: 1 })
    expect(getByText(/1/)).toBeInTheDocument()
  })

  it('Should not render total product if total product is equal to 0', () => {
    const { queryByTestId } = makeSut({ totalProducts: 0 })
    expect(queryByTestId(/total/)).toBeNull()
  })

  it('Should call onClick successfully', () => {
    const spy = jest.fn()
    const { getByTestId } = makeSut({ onClick: spy })
    fireEvent.click(getByTestId(/cart/))
    expect(spy).toHaveBeenCalled()
  })
})
