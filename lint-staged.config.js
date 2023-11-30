/* eslint-env node */
const path = require('path');

const formatCommand = 'prettier --write';
const stylelintCommand = 'stylelint --allow-empty-input "**/*.{css,scss}"';
module.exports = {
  '*.{js,jsx,ts,tsx}': [formatCommand],
  '*.{css,scss}': [formatCommand, stylelintCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand],
};