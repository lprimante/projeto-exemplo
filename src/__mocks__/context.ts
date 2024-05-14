jest.mock('context/useTodosContext', () => ({
    // ...context,
    useTodosContext: () => ({
        state: {
            isError: false,
            isLoading: true,
            todos: [],
        },
        operations: { setIsLoading: jest.fn(), setIsError: jest.fn(), setTodos: jest.fn() },
    }),
}))
