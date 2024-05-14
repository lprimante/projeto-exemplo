import { useCallback } from 'react'
import { TodosType } from '../../typings'

export const useTodosService = () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    const requestHeader = {
        'Content-type': 'application/json; charset=UTF-8',
    }
    const getAllTodosItens = useCallback(async () => {
        return fetch(`${baseUrl}/todos`)
    }, [])

    const getTodoItembyId = useCallback(async (id: number) => {
        return fetch(`${baseUrl}/todos/${id}`)
    }, [])

    const saveTodoById = useCallback(async (todo: TodosType) => {
        return fetch(`${baseUrl}/todos/${todo.id}`, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: requestHeader,
        })
    }, [])

    const saveNewTodo = useCallback(async (todo: TodosType) => {
        return fetch(`${baseUrl}/todos`, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: requestHeader,
        })
    }, [])

    return {
        getAllTodosItens,
        getTodoItembyId,
        saveTodoById,
        saveNewTodo,
    }
}

export default useTodosService
