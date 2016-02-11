var markdownpdf = require('markdown-pdf');
var fs = require('fs');

fs.createReadStream("./source.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("./output.pdf"));
