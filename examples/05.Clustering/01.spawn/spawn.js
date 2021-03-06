const { spawn } = require('child_process');

const child = spawn('pwd', ['.', '-type', 'f']);

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`child stdout:\n${data}`);
});

child.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code}, signal ${signal}`);

});

// Other events on child: disconnect, error, message, close
//stdio objects: child.stdin(writable), child.stdout(readable), child.stderr