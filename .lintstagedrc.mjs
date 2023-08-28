export default {
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  'src/**/*.vue': ['eslint --fix', 'stylelint --fix'],
  'src/**/*.{scss,less,styl,html}': ['stylelint --fix'],
};
