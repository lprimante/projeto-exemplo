import { describe, expect, beforeEach, jest, it } from '@jest/globals'
import { useTodosService } from '../todos'
import { useApiMockData, errorMessage } from '../../__mocks__/constants'

export const mockedGetAllTodosService = jest.fn()

jest.mock('../todos', () => ({
    useTodosService: () => ({
        getAllTodosItens: mockedGetAllTodosService,
    }),
}))

const { getAllTodosItens } = useTodosService()

describe('Todos Service', () => {
    beforeEach(async () => mockedGetAllTodosService.mockClear())
    it('getTodos success', async () => {
        mockedGetAllTodosService.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(useApiMockData),
            }),
        )

        const result = await getAllTodosItens().then(response => response.json())
        expect(getAllTodosItens).toHaveBeenCalledTimes(1)
        expect(result).toMatchObject(useApiMockData)
    })

    it('getTodos error', async () => {
        const result = await getAllTodosItens()
        mockedGetAllTodosService.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
        expect(getAllTodosItens).toBeCalledTimes(1)
    })
})
