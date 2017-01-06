//dependencies from node
const path = require('path');

// dependencies from npm
const express = require('express');
const ejs = require('ejs');

//initialize
const app = express();

//set views directory
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//add a route rendering index view
// app.get('/', function(req, res, next) {
//   res.render('index.ejs', {greeting:'Hello Junebug'});
// });

app.get('/', function(req, res, next) {
  res.render('index.ejs', {names: [' Walker', ' Kate', ' C.J.', ' June']});
});

//set up server

const port = 3000;
app.listen(port, () => console.log(`Server listening on: ${port}`));
