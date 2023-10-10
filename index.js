const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/test') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'OK' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'NOT OK' }));
  }
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
