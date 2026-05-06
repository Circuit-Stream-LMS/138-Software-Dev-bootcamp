const os = require('os');

console.log('OS Platform:', os.platform());
console.log('OS CPU Architecture:', os.arch());
console.log('Available Memory (in bytes):', os.freemem());
console.log('Total Memory (in bytes):', os.totalmem());