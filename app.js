const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers.js');
const app = express()

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.put('/sentiment', function (req, res) {
  res.send(handlers.sentimentAnalyze(req.body.utterance));
})
 
app.listen(3000);

