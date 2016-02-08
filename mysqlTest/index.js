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
  console.log(rows[0].column1);
  console.log(rows[1].column1);
  console.log(rows.length)
});

//var query = connection.query('select * from table9');
//console.log(query);

connection.end();
