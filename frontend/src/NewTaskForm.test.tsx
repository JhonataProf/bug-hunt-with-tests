import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import NewTaskForm from './components/NewTaskForm'

describe('NewTaskForm', () => {
  it('mostra erro quando tenta enviar com título vazio', () => {
    const onCreate = () => {}
    render(<NewTaskForm onCreate={onCreate} />)
    const button = screen.getByRole('button', { name: /adicionar/i })
    fireEvent.click(button)
    expect(screen.getByText(/título é obrigatório/i)).toBeInTheDocument()
  })
})