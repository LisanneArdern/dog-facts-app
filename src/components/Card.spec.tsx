import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', (): void => {
  it('Card contains children & gets rendered', (): void => {
    render(<Card fact={'Dog fact'}/>)
    const CardText: HTMLElement = screen.getByRole('heading', {
      name: 'Dog fact',
    })
    expect(CardText).toBeInTheDocument()
  })
})