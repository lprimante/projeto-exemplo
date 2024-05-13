// @ts-nocheck
import { useApiMockData } from './constants'

jest.mock('service/todos', () => ({
    useTodosService: () => ({
        getAllTodosItens: jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(useApiMockData),
            }),
        ),
    }),
}))
