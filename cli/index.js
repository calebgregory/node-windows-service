#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2))
const { appendFileSync } = require('fs')
const path = require('path')
const log = require('../logger')

const logText = `[${Date.now()}]: ${argv}`

log.info(logText)
