#!/usr/bin/env node
const spawn = require('child_process')['spawn'];
const path = require('path');

const log = console.log.bind(console)
const err = console.error.bind(console)

const script = path.resolve('C:', 'Users', 'calebgregory', 'code', 'node-windows-service', 'cli')
const cli = spawn('node', [ '--harmony', '--harmony_destructuring', script, '--a=b' ]);

cli.stdout.on('data', (data) => log(data.toString()))
cli.stderr.on('data', (data) => err(data.toString()))
cli       .on('exit', (code) => log(`cli exited with code [${code}]`))
