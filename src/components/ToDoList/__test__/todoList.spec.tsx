import { render, screen } from '@testing-library/react'
import { ToDoList } from '../index'
import { useApiMockData } from '../../../__mocks__/constants'

const mockedHandleSelectChange = jest.fn()
const mockedHandleEdit = jest.fn()
const mockedOnDelete = jest.fn()

describe('ToDoList Component', () => {
    it('renders ToDoList component', async () => {
        render(
            <ToDoList
                todos={useApiMockData}
                handleSelectChange={mockedHandleSelectChange}
                handleEdit={mockedHandleEdit}
                onDelete={mockedOnDelete}
            />,
        )

        const element = await screen.findByText(/Kaliteye hoşgeldiniz/i)
        expect(element).toBeDefined()
    })
})
