const { createLogger } = require('bunyan')

const path = 'C:\\Users\\calebgregory\\code\\node-windows-service\\logs\\stdout.log'

module.exports = createLogger({
  streams: [{ path }]
})
