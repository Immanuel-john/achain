const express = require('express');
const app = express()
var bodyParser = require('body-parser')

var routes = require('./controllers/routes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/ownership',routes);

app.listen(4000,()=> console.log('App listening on port 4000'));