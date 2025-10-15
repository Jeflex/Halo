module.exports = {
  // Use single quotes instead of double quotes
  singleQuote: true,
  // Specify the line length that Prettier will wrap on
  printWidth: 80,
  // Number of spaces per indentation level
  tabWidth: 2,
  // Print trailing commas wherever possible in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',
  // Do not print spaces between brackets in object literals
  bracketSpacing: true,
  // Add a semicolon at the end of statements
  semi: true,
  // Use tabs instead of spaces for indentation
  useTabs: false,
  // Put the > of a multi-line JSX element on the same line as the last prop
  jsxBracketSameLine: false,
  // Add parentheses around a sole arrow function parameter
  arrowParens: 'always',
  //From gluestack-v3: https://gluestack.io/ui/docs/home/getting-started/tooling-setup
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tva'],

};
