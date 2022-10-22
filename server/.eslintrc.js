module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'array-bracket-spacing': [1, 'never'], // enforce spacing inside array brackets
    'arrow-spacing': 1, // require space before/after arrow function's arrow
    'arrow-parens': [1, 'always'], // require parens in arrow function arguments
    quotes: [1, 'single'], // specify whether double or single quotes should be used
    'no-extra-semi': 1, // disallow unnecessary semicolons
    'no-multi-spaces': 1, // disallow multiple spaces
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
    'no-multiple-empty-lines': [1, { max: 1, maxEOF: 1 }], // disallow multiple empty lines and only one newline at the end
    'no-dupe-else-if': 1, // disallow duplicate conditions in if-else-if chains
    'no-duplicate-case': 1, // disallow duplicate conditions in switch statements
    'no-invalid-this': 1, // disallow this keywords outside of classes or class-like objects
    'block-spacing': 1, // disallow or enforce spaces inside of single line blocks
    'brace-style': [1, '1tbs', { allowSingleLine: true }], // enforce one true brace style
    'computed-property-spacing': [1, 'never'], // disallow or enforce spaces inside of computed properties
    'comma-spacing': [1, { before: false, after: true }], // enforce spacing before and after comma
    'comma-style': [1, 'last'], // enforce one true comma style
    'default-case': 1, // require default case in switch statements
    'default-case-last': 1, // enforce default clauses in switch statements to be last
    'default-param-last': 1, // enforce default parameters to be last
    'space-in-parens': [1, 'never'], // require or disallow spaces inside parentheses
    'space-infix-ops': [1, { int32Hint: false }], // require spaces around operators
    'space-unary-ops': [1, { words: true, nonwords: false }], // require or disallow spaces before/after unary operators
    semi: [1, 'always'], // require or disallow use of semicolons instead of ASI
    'dot-notation': 1, // encourage use of dot notation whenever possible
    'id-length': [1, { min: 2, max: 30, properties: 'never' }], // enforce minimum and maximum identifier lengths
    indent: [1, 2, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }], // specify tab or space width for your code
    'keyword-spacing': 1, // enforce spacing before and after keywords
    'key-spacing': [1, { beforeColon: false, afterColon: true }], // enforce spacing between keys and values in object literal properties
    'rest-spread-spacing': [1, 'never'], // enforce spacing between rest and spread operators and their expressions
  },
  ignorePatterns: ['.eslintrc.js'],
};
