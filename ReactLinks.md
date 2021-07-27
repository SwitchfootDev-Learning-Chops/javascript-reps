# React Links

## Hooks tutorials

[Basic Hooks Cookbook](https://usehooks.com/)

[useState/useEffect React V16 examples w/ React class comparisons](https://medium.com/quick-code/react-hooks-usestate-useeffect-v16-9-with-examples-60ba2e78fd1e)

[useEffect Examples](https://daveceddia.com/useeffect-hook-examples/)

[Using Hook-based Router](https://blog.bitsrc.io/hookrouter-a-modern-approach-to-react-routing-b6e36f7d49d9)

## React Interview Links

[React Interview Questions](https://www.edureka.co/blog/interview-questions/react-interview-questions/)

## React Tools/Tips

[Add CSS Reset to CRA project](https://create-react-app.dev/docs/adding-css-reset/)

[Example Package file for development]

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jsx-a11y/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "jsx-a11y"],
  "rules": {
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    // No console for development only
    "no-console": 0
  }
}
```
