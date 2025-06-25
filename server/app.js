const express = require('express');

const app = express();

const host = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.send('todo server is online');
});

app.listen(port, () => {
  console.log(`server listening on ${host}:${port}`);
});
