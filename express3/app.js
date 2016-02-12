var express1 = require('express');
var path = require('path');
var app = express1();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(1337, function() {
   console.log('ready on port 1337');
});

app.get("/index.js", function(req, res){
   res.render('index',{title: 'express'});

});
