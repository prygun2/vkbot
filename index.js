const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(`req:`, req)
    res.send('Hello from Docker!');
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});
