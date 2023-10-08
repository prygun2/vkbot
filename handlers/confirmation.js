"use strict";

const confirmation = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const data = JSON.parse(body);

            if (data.type === 'confirmation' && data.group_id === 48432605) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end('1561549d');
            } else {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end('Error');
            }
        } catch (error) {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end('Invalid JSON');
        }
    });
};

module.exports = confirmation;