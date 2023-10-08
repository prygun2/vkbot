const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Проверка роута
    if (parsedUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, this is the main route!');
    } else if (parsedUrl.pathname === '/another-route') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to another route!');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
