const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express.JS!');
});

app.get('/hello', (req, res) => {
  res.send('hello world!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
