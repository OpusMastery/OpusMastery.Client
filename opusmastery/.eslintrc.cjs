module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        'vue/html-indent': ['error', 4]
    }
};