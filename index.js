module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: ["flowtype"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      defaultParams: true,
      jsx: true
    }
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/href-no-hash": "off",
    "no-continue": "off",
    "flowtype/define-flow-type": 1,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "object-curly-newline": 0,
    "no-mixed-operators": 0,
    camelcase: 0
  }
};
