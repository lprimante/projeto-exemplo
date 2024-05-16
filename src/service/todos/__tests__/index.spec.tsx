import { describe, expect, beforeEach, jest, it } from '@jest/globals'
import { useTodosService } from '../'
import { useApiMockData, errorMessage } from '../../../__mocks__/constants'

const mockedGetAllTodosService = jest.fn()
const mockedGetTodoItembyId = jest.fn()
const mockedSaveTodoById = jest.fn()
const mockedSaveNewTodo = jest.fn()

jest.mock('../', () => ({
    useTodosService: () => ({
        getAllTodosItens: mockedGetAllTodosService,
        getTodoItembyId: mockedGetTodoItembyId,
        saveTodoById: mockedSaveTodoById,
        saveNewTodo: mockedSaveNewTodo,
    }),
}))

const { getAllTodosItens, getTodoItembyId, saveTodoById, saveNewTodo } = useTodosService()

describe('Todos Service', () => {
    beforeEach(async () => jest.clearAllMocks())
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
        mockedGetAllTodosService.mockImplementation(() => Promise.reject(errorMessage))

        await getAllTodosItens().catch(err => err)
        expect(getAllTodosItens).toBeCalledTimes(1)
    })
    it('getTodos success', async () => {
        mockedGetTodoItembyId.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(useApiMockData),
            }),
        )

        const result = await getTodoItembyId(1).then(response => response.json())
        expect(getTodoItembyId).toHaveBeenCalledTimes(1)
        expect(result).toMatchObject(useApiMockData)
    })

    it('getTodos error', async () => {
        mockedGetTodoItembyId.mockImplementation(() => Promise.reject(errorMessage))

        await getTodoItembyId(1).catch(err => err)
        expect(getTodoItembyId).toBeCalledTimes(1)
    })
    it('saveTodoById success', async () => {
        mockedSaveTodoById.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(useApiMockData),
            }),
        )

        const result = await saveTodoById(useApiMockData[0]).then(response => response.json())
        expect(saveTodoById).toHaveBeenCalledTimes(1)
        expect(result).toMatchObject(useApiMockData)
    })

    it('saveTodoById error', async () => {
        mockedSaveTodoById.mockImplementation(() => Promise.reject(errorMessage))

        await saveTodoById(useApiMockData[0]).catch(err => err)
        expect(saveTodoById).toBeCalledTimes(1)
    })
    it('saveNewTodo success', async () => {
        mockedSaveNewTodo.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(useApiMockData),
            }),
        )

        const result = await saveNewTodo(useApiMockData[0]).then(response => response.json())
        expect(saveNewTodo).toHaveBeenCalledTimes(1)
        expect(result).toMatchObject(useApiMockData)
    })

    it('saveNewTodo error', async () => {
        mockedSaveNewTodo.mockImplementation(() => Promise.reject(errorMessage))

        await saveNewTodo(useApiMockData[0]).catch(err => err)
        expect(saveNewTodo).toBeCalledTimes(1)
    })
})
