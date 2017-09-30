var webpackLoadPlugins = ({
    pattern: ['*-webpack-plugin','@*/*-webpack-plugin'], // the glob(s) to search for
    config: 'package.json', // where to find the plugins, by default searched up from process.cwd()
    scope: ['dependencies', 'devDependencies', 'peerDependencies'], // which keys in the config to look within
    replaceString: /-webpack-plugin$/, // what to remove from the name of the module when adding it to the context
  });
var messages = require('./messages');
var app = document.querySelector('#page');
app.innerHTML = "<p>" + messages.hi + messages.event + '</p>';
