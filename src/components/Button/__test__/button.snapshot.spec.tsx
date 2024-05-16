import { render } from '@testing-library/react'
import { Button } from '../index'

it('Snapshot of Button', () => {
    const tree = render(<Button onClick={jest.fn()} text="Clique Aqui" />)
    expect(tree).toMatchSnapshot()
})
