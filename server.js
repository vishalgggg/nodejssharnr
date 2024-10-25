const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Your AI companion, Copilot');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from your server!\n');
});

server.listen(4000, 'localhost', () => {
  console.log('Server running at http://localhost:4000/');
});
