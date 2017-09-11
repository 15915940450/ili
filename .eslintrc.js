module.exports = {
    "env": {
      "browser": true,
      "jquery":true,
      "commonjs":true,
      "es6": true
    },
    "globals":{
      "Moon":true,
      "__dirname":true
    },
    "extends": "eslint:recommended",
    "rules": {
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "eqeqeq": ["error", "always"],
      "quotes": ["error", "single"]
    }
};
