const fs = require('fs');
const moment = require('moment');

const log = function(stream, message, closeStream) {
    stream.write(`${moment().format('D-MM-Y hh:mm:ss')} - ${message}`);

    if (closeStream) {
        stream.end();
    }
};

const logFileStream = fs.createWriteStream('test.log', { flags: 'a' }); // open stream for appending
log(logFileStream, 'app started\n', false);
log(logFileStream, 'app did something\n', false);
log(logFileStream, 'app finished', true);