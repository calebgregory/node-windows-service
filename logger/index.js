const { appendFileSync } = require('fs')
const path = require('path')

const logFile = path.resolve(__dirname, '..', 'logs', 'stdout.log')

module.exports = (text) => appendFileSync(logFile, text)
