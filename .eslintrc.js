module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "require": false,
        "document": false,
        "module": false,
        "import": false,
        "export": false
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // "parser": "vue-eslint-parser",
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};