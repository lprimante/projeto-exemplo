import { useTodosContext } from '../../context/useTodosContext'
import { useTodosService } from '../../service/todos'
import type { Todos } from '../../typings/todos'

export function useTodos() {
    const { operations, state } = useTodosContext()
    const { setIsError, setIsLoading, setTodos } = operations || {}
    const { todos } = state || {}
    const { getAllTodosItens } = useTodosService()

    async function getTodos() {
        getAllTodosItens()
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch(error => setIsError(!!error))
            .finally(() => setIsLoading(false))
    }

    function updateTodos(todoSelected: number, checked: boolean) {
        const updateTodos: Array<Todos> = todos.map(todo => {
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
        updateTodos,
    }
}
