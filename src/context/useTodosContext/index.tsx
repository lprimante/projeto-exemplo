import React, { createContext, ReactNode, useContext, useState } from 'react'
import type { Todos } from '../../typings/todos'

interface TodosContextProviderProps {
    children: ReactNode
}

interface TodosContextProps {
    state: {
        isError: boolean
        isLoading: boolean
        todos: Array<Todos>
    }
    operations: {
        setIsLoading: (state: boolean) => void
        setIsError: (state: boolean) => void
        setTodos: React.Dispatch<React.SetStateAction<Array<Todos>>>
    }
}

export const TodosContext = createContext({} as TodosContextProps)

export function TodosContextProvider({ children }: TodosContextProviderProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [todos, setTodos] = useState<Array<Todos>>([])

    return (
        <TodosContext.Provider
            value={{
                state: {
                    isError,
                    isLoading,
                    todos,
                },
                operations: {
                    setIsLoading,
                    setIsError,
                    setTodos,
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
export { Todos }
