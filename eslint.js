module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules": {
    // enable additional rules
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],

    // disable rules from base configurations
    "no-console": ["error"],
  }
};
