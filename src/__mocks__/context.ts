jest.mock('../context/useTodosContext', () => ({
    useTodosContext: () => ({
        state: {
            isError: false,
            isLoading: true,
            todos: [],
            seletedTodo: {},
        },
        operations: {
            setIsLoading: jest.fn(),
            setIsError: jest.fn(),
            setTodos: jest.fn(),
            setSelectedTodo: jest.fn(),
        },
    }),
}))
