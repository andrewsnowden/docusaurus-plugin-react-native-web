module.exports = function() {
  return {
    name: 'docusaurus-plugin-react-native-web',
    configureWebpack(_config, isServer, utils) {
      return {
        resolve: {
          alias: {
            'react-native': 'react-native-web'
          }
        }
      }
    }
  }
}