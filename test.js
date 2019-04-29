'use strict';

const { spawn } = require('child_process');

const child = spawn('c8', 'mocha --exit test/*.test.js'.split(' '), {
  stdio: [ 0, 1, 2, 'ipc' ],
});
child.once('exit', () => {
  console.log('exited');
});
