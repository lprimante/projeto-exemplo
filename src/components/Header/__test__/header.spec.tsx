import { render, screen } from '@testing-library/react'
import { Header } from '../index'
describe('Header Component', () => {
    it('renders Header component', async () => {
        render(<Header title="Titulo aqui" />)

        const element = await screen.findByText(/Titulo aqui/i)
        expect(element).toBeDefined()
    })
})
