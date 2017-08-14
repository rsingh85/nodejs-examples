const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// the function passed in to createServer (request handler)
// is called once for every HTTP request 
const server = http.createServer((req, res) => {
    
    // inspect request
    console.log("Request method", req.method);
    console.log("Request url", req.url);
    console.log("Headers", req.headers);

    // response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// start web server/listen for requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});