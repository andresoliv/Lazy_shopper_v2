const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../')));

app.get( '/', function (req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

const port = 3000;

app.listen(port, () => {
  console.log("listening on", port);
});

