import { render } from '@testing-library/react'
import { Header } from '../index'

it('Snapshot of Header', () => {
    const tree = render(<Header title="Titulo Aqui" />)
    expect(tree).toMatchSnapshot()
})
