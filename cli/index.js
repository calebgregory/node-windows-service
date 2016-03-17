#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const log = require('../logger')

const argString = JSON.stringify(argv)
const logText = `[${Date.now()}]: ${argString}\r\n`

log(logText)
