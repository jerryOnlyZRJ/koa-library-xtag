module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "env": {
        "node": true,
        "es6": true,
        "browser": true,
    },
    "globals": {
        "$": false,
        "xtag": false,
        "XTagElement": false
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module" //es6 import
    },
    "rules": {
        "no-unreachable": 2,
        "no-console": 0
    }
}