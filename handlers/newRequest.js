"use strict";

const newRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('newRequest');
}

module.exports = newRequest;