'use strict'

const createServer = require('ipfsd-ctl').createServer
const server = createServer()

module.exports = {
  hooks: {
    browser: {
      pre: server.start.bind(server),
      post: server.stop.bind(server)
    }
  }
}
