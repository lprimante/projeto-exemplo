module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{ts,tsx}'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    coveragePathIgnorePatterns: [
        '/src/main.tsx',
        '/node_modules/',
        '__mocks__',
        '/src/assets/',
        '/src/constants/',
        '/src/typings/',
        '/src/context/',
        '/src/store/',
        '/src/layouts/',
        '/src/pages/',
        '/src/router/',
        '/src/index.ts',
        '/src/App.tsx',
        'styles.ts',
        'styles.tsx',
    ],
    coverageReporters: ['lcov'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                isolatedModules: true,
            },
        ],
    },
}
