module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['airbnb', 'react-app', 'react-app/jest', 'prettier'],
  rules: {
    semi: 0,
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    "react/react-in-jsx-scope": "off",
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
