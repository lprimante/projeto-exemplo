import { render } from '@testing-library/react'
import { Home } from '../'

it('Snapshot of Home', () => {
    const tree = render(<Home />)
    expect(tree).toMatchSnapshot()
})
