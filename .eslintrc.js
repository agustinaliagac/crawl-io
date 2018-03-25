module.exports = {
    "extends": "airbnb",
    "parserOptions": {
      "ecmaVersion": 6
    },
    "env": {
      "es6": true,
      "node": true,
      "browser": true,
      "jest": true,
    },
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-var": "off",
      "func-names": "off",
      "global-require": "off",
      "prefer-arrow-callback": "off",
      "react/forbid-prop-types": "off",
      "object-curly-newline": "off",
    }
};