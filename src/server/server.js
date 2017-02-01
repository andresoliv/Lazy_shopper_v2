const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;
app.use(express.static(path.join(__dirname, '../../')));

app.get('/', function (req, res) {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })
  res.sendFile(path.join(__dirname, '../../app.html'));
})

// app.get('/home', function (req, res) {
  
// })

// app.get('/profile', function (req, res) {
  
// })

app.listen(PORT, 'localhost', serverError => {
  if (serverError) {
    return console.error(serverError);
  }
  console.log(`Listening at http://localhost:${PORT}`);
});