const mockSetInitialState: never[] = []
const initialState = jest.fn((newState = mockSetInitialState) => newState)

jest.mock('react', () => {
    const react = jest.requireActual('react')
    return {
        ...react,
        useCallback: jest.fn(fn => fn),
        useState: jest.fn(() => [initialState(), mockSetInitialState]),
    }
})
