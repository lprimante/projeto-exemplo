import { useEffect } from 'react'
import { useTodosContext } from '../../context/useTodosContext'
import { useTodosService } from '../../service/todos'
import type { TodosType } from '../../typings/todos'

export function useTodos() {
    const { operations, state } = useTodosContext()
    const { setIsError, setIsLoading, setTodos, setSelectedTodo } = operations || {}
    const { todos } = state || {}
    const { getAllTodosItens, getTodoItembyId, saveNewTodo, saveTodoById } = useTodosService()

    useEffect(() => {
        getTodos()
    }, [])

    async function getTodos() {
        await getAllTodosItens()
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch(error => setIsError(!!error))
            .finally(() => setIsLoading(false))
    }

    async function getTodoById(id: number) {
        await getTodoItembyId(id)
            .then(response => response.json())
            .then(json => setSelectedTodo(json))
            .catch(error => setIsError(!!error))
            .finally(() => setIsLoading(false))
    }

    async function saveTodo(todo: TodosType) {
        if (todo?.id) {
            await saveTodoById(todo)
                .then(response => response.json())
                .then(json => setTodos(json))
                .catch(error => setIsError(!!error))
                .finally(() => setIsLoading(false))
        }
        await saveNewTodo(todo)
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch(error => setIsError(!!error))
            .finally(() => setIsLoading(false))

        setSelectedTodo(todo)
        setTodos([...todos, todo])
    }

    function updateTodoComplete(todoSelected: number, checked: boolean) {
        const updateTodos: Array<TodosType> = todos.map(todo => {
            if (todo.id === todoSelected) {
                return { ...todo, completed: checked }
            }
            return todo
        })
        setTodos(updateTodos)
    }

    return {
        ...state,
        ...operations,
        getTodos,
        updateTodoComplete,
        getTodoById,
        saveTodo,
    }
}
