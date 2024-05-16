import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { useTodos } from '..'

describe('Hooks', () => {
    beforeAll(() => {
        jest.spyOn(React, 'useContext').mockReturnValue({
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
        })
    })
    it('should return', async () => {
        const { result } = await renderHook(() => useTodos())

        expect(result).toBeDefined()
    })
})
