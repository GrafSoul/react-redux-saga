module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ['react'],
    extends: ['plugin:react/recommended', 'eslint:recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        'react/prop-types': 0,
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    },

    // Newly added property
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
};
