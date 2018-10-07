const express = require('express');
const app = express()
var routes = require('./controllers/routes')

app.use('/ownership',routes);

app.listen(4000,()=> console.log('App listening on port 4000'));