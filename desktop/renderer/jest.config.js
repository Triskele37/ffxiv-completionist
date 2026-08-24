export default {
    preset: 'jest-preset-angular',
    roots: ['./'],
    testMatch: ['./**/*.spec.ts'],
    setupFilesAfterEnv: ['./setup-jest.ts'],
    moduleNameMapper: {
        "^@admin/(.*)$": ["<rootDir>/app/admin/$1"],
        "^@constant$": ["<rootDir>/app/constant"],
        "^@constant/(.*)$": ["<rootDir>/app/constant/$1"],
        "^@component/(.*)$": ["<rootDir>/app/core/component/$1"],
        "^@data$": ["<rootDir>/app/data"],
        "^@data/(.*)$": ["<rootDir>/app/data/$1"],
        "^@decorator/(.*)$": ["<rootDir>/app/core/decorator/$1"],
        "^@directive/(.*)$": ["<rootDir>/app/core/directive/$1"],
        "^@model/(.*)$": ["<rootDir>/app/model/$1"],
        "^@pipe/(.*)$": ["<rootDir>/app/core/pipe/$1"],
        "^@service/(.*)$": ["<rootDir>/app/core/service/$1"],
        "^@test/(.*)$": ["<rootDir>/test/$1"],
        "^@util/(.*)$": ["<rootDir>/app/core/util/$1"],
        "^@view/(.*)$": ["<rootDir>/app/view$1*"]
    },
    transform: {
        '^.+\\.(ts)$': [
            'jest-preset-angular',
            {
                tsconfig: './renderer/tsconfig.spec.json'
            }
        ]
    },
    moduleFileExtensions: ['ts', 'js'],
    collectCoverageFrom: [
        './**/*.ts',
        '!./main.ts',
        '!./polyfills.ts'
    ]
};
