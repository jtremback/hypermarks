
/*!
 * Module dependencies.
 */

var path = require('path')
var rootPath = path.resolve(__dirname + '../..')

/**
 * Expose config
 */

module.exports = {
  development: {
    root: rootPath,
    db: 'mongodb://localhost/hypermarks_dev'
  },
  test: {
    root: rootPath,
    db: 'mongodb://localhost/hypermarks_test'
  },
  staging: {
    root: rootPath,
    db: process.env.MONGOHQ_URL
  },
  production: {
    root: rootPath,
    db: process.env.MONGOHQ_URL
  }
}
