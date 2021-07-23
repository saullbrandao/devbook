import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from '.'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Search bar', () => {
  it('should call a function when enter key is pressed or the button is clicked', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    const button = screen.getByRole('button')

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    userEvent.type(input, 'linus')
    userEvent.type(input, '{enter}')
    expect(router.push).toHaveBeenCalledWith('/search?query=linus')

    fireEvent.click(button)
    expect(router.push).toHaveBeenCalledWith('/search?query=linus')
  })

  it('should not call a function when there is no user input', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search')
    const button = screen.getByRole('button')

    const router = { push: jest.fn() }
    useRouter.mockReturnValue(router)

    userEvent.type(input, '{enter}')
    expect(router.push).toHaveBeenCalledTimes(0)

    fireEvent.click(button)
    expect(router.push).toHaveBeenCalledTimes(0)
  })

  it('should have rounded class if rounded prop is passed', () => {
    render(<SearchBar rounded />)
    const input = screen.getByPlaceholderText('Search')
    const button = screen.getByRole('button')

    expect(input).toHaveClass('rounded-full')
    expect(button).toHaveClass('rounded-md md:rounded-full')
  })
  it('should have hidden class if hidden prop is passed', () => {
    const { container } = render(<SearchBar hidden />)

    expect(container.firstChild).toHaveClass('hidden')
  })
})
