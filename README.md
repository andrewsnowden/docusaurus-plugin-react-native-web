# docusaurus-plugin-react-native-web

A simple Docusaurus plugin that adds support for [react-native-web](https://github.com/necolas/react-native-web)
to [Docusaurus V2](https://v2.docusaurus.io/).

## Installation

First, install the package:

```
npm install --save docusaurus-plugin-react-native-web
```

Then add it to your Docusaurus plugins in `docusaurus.config.js`:

```
module.exports = {
  ...
  plugins: [
    'docusaurus-plugin-react-native-web'
  ]
}
```

## How it works

All the plugin does is modify the Webpack configuration to rewrite `react-native` to `react-native-web`, by adding the following:

```
resolve: {
  alias: {
    'react-native': 'react-native-web'
  }
}
```

