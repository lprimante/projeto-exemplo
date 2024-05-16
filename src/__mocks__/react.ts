const mockUseState = jest.fn(init => [init, jest.fn()])

jest.mock('react', () => {
    const react = jest.requireActual('react')
    return {
        ...react,
        useCallback: jest.fn(fn => fn),
        useState: mockUseState,
    }
})
