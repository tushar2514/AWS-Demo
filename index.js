const express = require('express');
const ip = require('ip');
const app = express();

app.get('/fuck', (req, res) => {
    return res.json({
        message: 'you',
        serverAddress: ip.address()
    })
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});