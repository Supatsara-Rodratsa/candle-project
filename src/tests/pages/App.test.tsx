const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

import React from 'react'
import { render, screen, cleanup, within } from '@testing-library/react'
import App from '../../pages/App'

7
afterEach(cleanup)
describe('Test main screen', () => {
  render(<App />)
  it('render Scented Candle', () => {
    const { getByText } = within(screen.getByTestId('header-brand'))
    expect(getByText('Scented Candle')).toBeInTheDocument()
  })
})
