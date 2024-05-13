import { useCallback } from 'react'

export const useTodosService = () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com'

    const getAllTodosItens = useCallback(async () => {
        return fetch(`${baseUrl}/todos`)
    }, [])

    return {
        getAllTodosItens,
    }
}

export default useTodosService
