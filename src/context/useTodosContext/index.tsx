import React, { createContext, ReactNode, useContext, useState } from 'react'
import type { TodosType } from '../../typings/todos'

interface TodosContextProviderProps {
    children: ReactNode
}

interface TodosContextProps {
    state: {
        isError: boolean
        isLoading: boolean
        todos: Array<TodosType>
        seletedTodo: TodosType | undefined
    }
    operations: {
        setIsLoading: (state: boolean) => void
        setIsError: (state: boolean) => void
        setTodos: React.Dispatch<React.SetStateAction<Array<TodosType>>>
        setSelectedTodo: React.Dispatch<React.SetStateAction<TodosType | undefined>>
    }
}

export const TodosContext = createContext({} as TodosContextProps)

export function TodosContextProvider({ children }: TodosContextProviderProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [todos, setTodos] = useState<Array<TodosType>>([])
    const [seletedTodo, setSelectedTodo] = useState<TodosType | undefined>()

    return (
        <TodosContext.Provider
            value={{
                state: {
                    isError,
                    isLoading,
                    todos,
                    seletedTodo,
                },
                operations: {
                    setIsLoading,
                    setIsError,
                    setTodos,
                    setSelectedTodo,
                },
            }}
        >
            {children}
        </TodosContext.Provider>
    )
}
export function useTodosContext(): TodosContextProps {
    const context = useContext(TodosContext)

    return context
}
export { TodosType }
