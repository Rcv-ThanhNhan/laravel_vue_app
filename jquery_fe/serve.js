const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '', 'index.html'))
})

app.listen(process.env.PORT || 3030, () => console.log('Server running...'));