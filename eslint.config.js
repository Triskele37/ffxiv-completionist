import angular from 'angular-eslint';
import typescript from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: [
            'angular/',
            'github/',
            '.idea/',
            '.nx/',
            '_documentation/',
            'dist/',
            'node_modules/',
            'out-tsc/',
            'release/',
            'resources/',
        ]
    },
    {
        files: ['src/**/*.ts'],
        ignores: ['src/**/*.spec.ts', 'src/**/*.mock.ts'],
        // languageOptions: {
        //     parserOptions: {
        //         projectService: true
        //     }
        // },
        extends: [
            //TODO switch when time to dive down the rabbit hole
            // ...typescript.configs.recommendedTypeChecked,
            ...typescript.configs.recommended,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',

            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports'
                }
            ],
        }
    },
    {
        files: ['src/**/*.spec.ts', 'src/**/*.mock.ts'],
        // languageOptions: {
        //     parserOptions: {
        //         projectService: true
        //     }
        // },
        extends: [
            //TODO switch when time to dive down the rabbit hole
            // ...typescript.configs.recommendedTypeChecked,
            ...typescript.configs.recommended,
        ],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        }
    },
    {
        files: ['src/**/*.html'],
        extends: [
            ...angular.configs.templateRecommended
        ],
        rules: {
        }
    }
]);
