module.exports = {
    "extends": "airbnb",
    "parserOptions": {
      "ecmaVersion": 6
    },
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};