import { render } from '@testing-library/react'
import { Login } from '../'

it('Snapshot of Login', () => {
    const tree = render(<Login />)
    expect(tree).toMatchSnapshot()
})
