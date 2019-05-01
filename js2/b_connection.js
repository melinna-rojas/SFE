var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'node_mysql',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var query = connection.query('INSERT INTO personaje(nombre, apellido, biografia) VALUES(?, ?, ?)', ['Homero', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'], function(error, result){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);
connection.end();
