var http = require('http');
var marked = require('marked');
http.createServer(function(req, res) {
  res.write(marked('I am using __marked__.'));
  res.write(marked('~~~echo $HADOOP_USER_NAME~~~'));
  res.write(marked('<code>public static void main(String args[])</code>'));
  res.write(marked('[yahoo](http://tw.yahoo.com)'))
  res.end();
}).listen(8888);
