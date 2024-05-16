import { render } from '@testing-library/react'
import { ToDoList } from '../index'
import { useApiMockData } from '../../../__mocks__/constants'

it('Snapshot of ToDoList', () => {
    const tree = render(<ToDoList todos={useApiMockData} handleSelectChange={jest.fn()} handleEdit={jest.fn()} onDelete={jest.fn()} />)
    expect(tree).toMatchSnapshot()
})
