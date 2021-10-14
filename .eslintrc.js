module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'vue/no-multiple-template-root': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
