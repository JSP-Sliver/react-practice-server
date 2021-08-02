var http = require("http");
var server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.end('Hello world');
})

server.listen(8000);
console.log("Server is running at http://localhost:8000");
