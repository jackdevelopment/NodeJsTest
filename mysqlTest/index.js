var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'sqoop'
});
connection.connect();
connection.query('select * from table9', function(err, rows, fields) {
  if(err) throw err;
  rows.forEach(function(item){
     fields.forEach(function(field){
         console.log(item[field.name]);
     });
     console.log("");
  });


});

//var query = connection.query('select * from table9');
//console.log(query);

connection.end();
