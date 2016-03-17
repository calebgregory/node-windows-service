const { Service } = require('node-windows');

const svc = new Service({
  name: 'Test Log Process Argv',
  description: 'A test windows service to see if we can get this puppy working',
  script: 'C:\\Users\\calebgregory\\code\\node-windows-service\\app\\index.js'
});

svc.on('install', () => svc.start());

svc.install();
