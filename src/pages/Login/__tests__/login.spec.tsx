import { render, screen } from '@testing-library/react'
import { Login } from '../'
import '@testing-library/jest-dom'

describe('Login', () => {
    it('renders Header component', async () => {
        render(<Login />)

        const linkElement = await screen.getAllByText(/Entrar/i)
        expect(linkElement).toBeDefined()
    })
    it('renders Button component', async () => {
        render(<Login />)

        const linkElement = await screen.findByText(/Mantenha-me conectado/i)
        expect(linkElement).toBeDefined()
    })
})
