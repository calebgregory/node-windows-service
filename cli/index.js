#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const { appendFileSync } = require('fs')
const path = require('path')

const logFile = path.resolve('..', 'logs', 'stdout.log')
const logText = `[${Date.now()}]: ${argv}`

appendFileSync(logFile, logText)
