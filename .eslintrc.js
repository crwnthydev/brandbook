module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "indent": 0,
    "no-tabs": 0,
    quotes: 0,
    semi: ['error', 'never'],
    'space-before-function-paren': 0,
    'vue/name-property-casing': ['warn', 'kebab-case'],
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/require-default-prop': 'off',
    'vue/order-in-components': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'import/order': 'off',
    'no-mixed-operators': 'off',
    "vue/attribute-hyphenation": 0,
    "vue/attributes-order": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-indent": 0,
    'no-mixed-spaces-and-tabs': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-spacing': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0,
    'require-await': 0
  }
}
