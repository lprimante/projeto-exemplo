import { render, screen } from '@testing-library/react'
import { Home } from '../'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders Header component', async () => {
        render(<Home />)

        const linkElement = await screen.findByText(/Minha Lista de Tarefas/i)
        expect(linkElement).toBeDefined()
    })
    it('renders Button component', async () => {
        render(<Home />)

        const linkElement = await screen.findByText(/Adicionar Nova Tarefa/i)
        expect(linkElement).toBeDefined()
    })
})
