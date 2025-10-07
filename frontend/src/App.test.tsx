import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renderiza o título do jogo', () => {
    render(<App />)
    expect(screen.getByText(/Bug Hunt/i)).toBeInTheDocument()
  })
})