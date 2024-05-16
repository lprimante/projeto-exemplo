jest.mock('../hooks/useTodos', () => ({
    useTodos: () => ({
        isError: false,
        isLoading: false,
        todos: [
            {
                userId: 1,
                id: 1,
                title: 'abc',
                completed: false,
            },
        ],
        seletedTodo: undefined,
        getTodos: jest.fn(),
        updateTodoComplete: jest.fn(),
        getTodoById: jest.fn(),
        saveTodo: jest.fn(),
    }),
}))
