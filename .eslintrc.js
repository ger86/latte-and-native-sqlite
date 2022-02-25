module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/jsx-key': 'error',
    'comma-dangle': ['error', 'never'],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'no-console': ['warn'],
    eqeqeq: [2, 'always']
  }
};
