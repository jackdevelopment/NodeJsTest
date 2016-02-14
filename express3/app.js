var express1 = require('express');
var path = require('path');
var multer = require('multer')

var storage = multer.diskStorage({
   destination: function(req, file, cb) {
      cb(null, '/home/user1/uploads');
   },
   filename: function(req, file, cb) {
      //console.log(file);
      cb(null, file.originalname + '-' + Date.now());
   }
});

var upload = multer({storage: storage});
var router = require('./router/router');
var app = express1();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(1337, function() {
   console.log('ready on port 1337');
});

/*app.get("/index.js", function(req, res){
   res.render('index',{title: 'express'});

});

app.get("/upload", function(req, res){
   res.render('upload',{
      title: 'file upload'
   });
});*/

var cpUpload = upload.fields([{name: 'file1', maxCount: 1},{name: 'file2', maxCount: 1}]);

router(app, cpUpload);
/*app.post("/upload", cpUpload, function(req, res, next){
  // console.log(req.file);
   res.redirect('/upload');
});*/
