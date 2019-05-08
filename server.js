const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.status(200);
//   // res.sendFile(path.join(__dirname, 'index.html'));
//   res.end();
// });

app.listen(port, () => {
  console.log(`Running on localhost:${port}`);
});