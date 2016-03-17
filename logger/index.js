const appendFileSync = require('fs')['appendFileSync']

const path = 'C:\\Users\\calebgregory\\code\\node-windows-service\\logs\\stdout.log'

module.exports = (text) => appendFileSync(path, text)
