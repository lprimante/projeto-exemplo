import { render, screen } from '@testing-library/react'
import { Button } from '../index'
describe('Button Component', () => {
    it('renders Button component', async () => {
        render(<Button onClick={jest.fn()} text="Clique aqui" />)

        const element = await screen.findByText(/Clique aqui/i)
        expect(element).toBeDefined()
    })
})
