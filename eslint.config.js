// eslint.config.js
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    {
        ignores: [
            'node_modules/',
            'dist/',
            'coverage/',
            '*.js',
            '*.json',
            'prisma/',
            'src/generated/',
        ],
        rules: {},
    },
    prettier,
];
