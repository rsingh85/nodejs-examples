const fs = require('fs');


const log = function(stream, message, closeStream) {
    stream.write(message);

    if (closeStream) {
        stream.end();
    }
};

const logFileStream = fs.createWriteStream('test.log', { flags: 'a' }); // open stream for appending
log(logFileStream, 'app started\n', false);
log(logFileStream, 'app did something\n', false);
log(logFileStream, 'app finished', true);