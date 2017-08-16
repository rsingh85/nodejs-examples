const fs = require('fs');
const logFile = fs.createWriteStream('test.log', { flags: 'a' }); // open stream for appending

const log = function(message, close) {
    logFile.write(message);

    if (close) {
        logFile.end();
    }
};

log('app started\n', false);
log('app did something\n', false);
log('app finished', true);