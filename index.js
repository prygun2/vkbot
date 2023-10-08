const http = require('http');
const url = require('url');
const newRequest = require('./handlers/newRequest')
const confirmation = require('./handlers/confirmation')

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/api/new-request') {
        newRequest(req, res)
    } else if (req.method === 'POST' && parsedUrl.pathname === '/api/confirmation') {
        confirmation(req, res)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end('404 Not Found')
    }
});

const PORT = 80;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
