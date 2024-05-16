import { render } from '@testing-library/react'
import { TodoModify } from '../'

it('Snapshot of TodoModify', () => {
    const tree = render(<TodoModify />)
    expect(tree).toMatchSnapshot()
})
