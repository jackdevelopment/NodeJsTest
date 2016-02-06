var express = require('express');
//var router = express.Router();

/* GET home page. */
router = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express123' });
  });
  app.get('/newbmw', function(req, res){
    res.send('hello world');
  });
};
module.exports = router;
