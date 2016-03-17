#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const log = console.log.bind(console)
const err = console.error.bind(console)

const script = path.resolve('..', 'cli')
const cli = spawn('node', [ '--harmony', '--harmony_destructuring', script, '--a=b' ]);

cli.stdout.on('data', (data) => log(data))
cli.stderr.on('data', (data) => err(data))
cli       .on('exit', (code) => log(`cli exited with code [${code}]`))
