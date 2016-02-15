var router = function(app, cpUpload) {
  app.get("/index.js", function(req, res) {
     res.render('index', {title: 'express'});
  });
  app.get("/upload", function(req, res) {
     res.render('upload',{
        title: 'file upload'
     });
  });
  app.post("/upload", cpUpload, function(req, res, next) {
     res.redirect('/upload');
  });
  app.get("/edit/:name", function(req, res) {
     console.log(req.params.name);
     res.render('edit',{
        title: 'edit title'
     });
  });
}
module.exports = router;
