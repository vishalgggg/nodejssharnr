const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome home');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to About Us page');
  } else if (req.url === '/node') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to my Node Js project');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(4000, 'localhost', () => {
  console.log('Server running at http://localhost:4000/');
});
