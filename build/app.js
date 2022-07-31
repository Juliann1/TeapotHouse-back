"use strict";
const express = require('express');
const app = express();
const PORT = process.env.PORT || '3030';
app.listen(PORT, () => {
    console.log(`Server online on ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello');
});
