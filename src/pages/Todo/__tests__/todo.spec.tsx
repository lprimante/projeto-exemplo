import { render, screen } from '@testing-library/react'
import { TodoModify } from '../'
import '@testing-library/jest-dom'

describe('TodoModify', () => {
    it('renders Header component', async () => {
        render(<TodoModify />)

        const linkElement = await screen.findByText(/Criar Minha Tarefa/i)
        expect(linkElement).toBeDefined()
    })
    it('renders Button component', async () => {
        render(<TodoModify />)

        const linkElement = await screen.findByText(/Adicionar Tarefa/i)
        expect(linkElement).toBeDefined()
    })
})
