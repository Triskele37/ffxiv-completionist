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
        // languageOptions: {
        //     parserOptions: {
        //         projectService: true,
        //     }
        // },
        // parserOptions: {
        //     project: [
        //         './tsconfig.serve.json',
        //         './src/tsconfig.app.json',
        //         './src/tsconfig.spec.json'
        //     ],
        //     'createDefaultProgram': true
        // },
        extends: [
            ...typescript.configs.recommended,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            'no-trailing-spaces': 'off',
            'no-underscore-dangle': 'off',
            // 'curly': 'off',
            // 'one-var': 'off',

            // '@typescript-eslint/no-inferrable-types': 'off',
            // '@typescript-eslint/naming-convention': 'off',
            // '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/no-explicit-any': 'off',

            // '@angular-eslint/directive-selector': 'off',
            // '@angular-eslint/no-output-on-prefix': 'off',
            // '@angular-eslint/component-selector': [
            //     'error',
            //     {
            //         type: 'element',
            //         prefix: 'com',
            //         style: 'kebab-case'
            //     }
            // ]
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
