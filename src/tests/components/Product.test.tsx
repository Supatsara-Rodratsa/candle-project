import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Product } from '../../components/Product'
import { Candle } from '../../interfaces/candle.interface'
import { useProductStore } from '../../stores/productStore'

const makeSut = (props?: Partial<Candle>) => {
  return render(<Product name="test" price={100} image="img" {...props} />)
}

afterEach(cleanup)
describe('Product Component', () => {
  beforeEach(() =>
    useProductStore.setState({
      allSelectedProducts: new Map<string, number>([['product', 5]]),
    })
  )
  it('Should render product name', () => {
    const { getByText } = makeSut({ name: 'Product Name' })
    expect(getByText(/Product Name/)).toBeInTheDocument()
  })

  it('Should render product price', () => {
    const { getByText } = makeSut({ price: 20 })
    expect(getByText(/20/)).toBeInTheDocument()
  })

  it('Should render product image', () => {
    const { getAllByRole } = makeSut({ image: 'image' })
    expect(getAllByRole('img')[0]).toHaveAttribute('src', 'image')
  })

  it('Should be able to show removing item button', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId(/remove-item/)).toBeInTheDocument()
  })

  it('Should be able to show adding item button', () => {
    const { getByTestId } = makeSut()
    expect(getByTestId(/add-item/)).toBeInTheDocument()
  })

  it('Should show count item per product correctly', () => {
    const { getByText } = makeSut({ name: 'product' })
    expect(getByText(/5/)).toBeInTheDocument()
  })
})
