const { Service } = require('node-windows');

const svc = new Service({
  name: 'Herrrrrro wollllllld',
  description: 'A test windows service to see if we can get this puppy working',
  script: 'C:\\Users\\calebgregory\\code\\node-windows-service\\app\\index.js'
});

svc.on('install', () => svc.start());

svc.install();
