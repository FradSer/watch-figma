#!/usr/bin/env node

var shell = require('shelljs');
var path = require('path')
var shellPath = path.dirname(require.resolve('watch-figma/package.json'))

function WatchFigma() {
  shell.exec('/bin/bash ' + shellPath + '/shell.sh')
}

module.exports = WatchFigma;

console.log("the plugin has reloaded.")

WatchFigma()
