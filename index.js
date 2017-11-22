#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2))
var sha1 = require('sha1')

var appId = argv.appId
var appKey = argv.appKey

console.log(encryptUZAppKey(appId, appKey))

function encryptUZAppKey(appId, appKey) {
  var now = Date.now();
  var encryptKey = sha1(appId+"UZ"+appKey+"UZ"+now)+"."+now

  return encryptKey
}
