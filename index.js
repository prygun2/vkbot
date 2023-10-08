const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, this is the main route!');
    }
});

const PORT = 80;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
