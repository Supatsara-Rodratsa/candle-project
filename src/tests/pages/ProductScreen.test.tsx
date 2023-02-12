import React from 'react'
import { render, screen, cleanup, within } from '@testing-library/react'
import ProductScreen from '../../pages/ProductScreen'

afterEach(cleanup)
describe('Test Product screen', () => {
  render(<ProductScreen />)
  it('render Candle Products', () => {
    const { getByText } = within(screen.getByTestId('header'))
    expect(getByText('Candle Products')).toBeInTheDocument()
  })
})
