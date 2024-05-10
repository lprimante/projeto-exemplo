module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '__mocks__',
        '/src/assets/',
        '/src/constants/',
        '/src/components/index.tsx',
        '/src/typings/',
        '/src/context/',
        '/src/store/',
        '/src/layouts/',
        '/src/pages/',
        '/src/router/',
        '/src/services/',
        '/src/index.ts',
        '/src/App.tsx',
        'styles.ts',
        'styles.tsx',
    ],
    coverageReporters: ['lcov'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.css': '<rootDir>/src/__mocks__/styleMock.ts',
        '^.+\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: 'jsdom',
    transform: {
        // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            {
                isolatedModules: true,
            },
        ],
    },
}
