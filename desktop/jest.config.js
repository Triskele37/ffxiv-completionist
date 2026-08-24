export default {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    moduleNameMapper: {
        "^@admin/(.*)$": ["<rootDir>/src/app/admin/$1"],
        "^@constant$": ["<rootDir>/src/app/constant"],
        "^@constant/(.*)$": ["<rootDir>/src/app/constant/$1"],
        "^@component/(.*)$": ["<rootDir>/src/app/core/component/$1"],
        "^@data$": ["<rootDir>/src/app/data"],
        "^@data/(.*)$": ["<rootDir>/src/app/data/$1"],
        "^@decorator/(.*)$": ["<rootDir>/src/app/core/decorator/$1"],
        "^@directive/(.*)$": ["<rootDir>/src/app/core/directive/$1"],
        "^@model/(.*)$": ["<rootDir>/src/app/model/$1"],
        "^@pipe/(.*)$": ["<rootDir>/src/app/core/pipe/$1"],
        "^@service/(.*)$": ["<rootDir>/src/app/core/service/$1"],
        "^@test/(.*)$": ["<rootDir>/src/test/$1"],
        "^@util/(.*)$": ["<rootDir>/src/app/core/util/$1"],
        "^@view/(.*)$": ["<rootDir>/src/app/view$1*"]
    },
    transform: {
        '^.+\\.(ts)$': [
            'jest-preset-angular',
            {
                tsconfig: '<rootDir>/src/tsconfig.spec.json'
            }
        ]
    },
    moduleFileExtensions: ['ts', 'js'],
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/main.ts',
        '!src/polyfills.ts'
    ]
};
