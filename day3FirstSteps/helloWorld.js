// First we get node's http library and set our hostname and port.
// This hostname simply directs the computer to itself.
// The port 3000 essentially describes where to connect to the computer.
const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
// Now we create our server using node's http library.
// The server will send an HTTP response with status code 200, content type header 'text/plain', and content 'Hello, World!\n' when you visit 127.0.0.1:3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});
// Now we tell the server to listen for connections.
// Once the server's listening, we can connect and it will send its response.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
