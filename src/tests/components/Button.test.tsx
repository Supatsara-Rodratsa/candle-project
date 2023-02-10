import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Button, ButtonProps } from '../../components/Button'

const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button title="test" onClick={jest.fn()} {...props} />)
}

afterEach(cleanup)
describe('Button Component', () => {
  test('Should render label correctly', () => {
    const { getByText } = makeSut({ title: 'My Button' })
    expect(getByText(/My Button/)).toBeInTheDocument()
  })

  test('Should call onClick successfully', () => {
    const spy = jest.fn()
    const { getByText } = makeSut({ onClick: spy })
    fireEvent.click(getByText(/test/))
    expect(spy).toHaveBeenCalled()
  })
})
