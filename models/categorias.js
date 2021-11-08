 //Importamos los datos de la conexión
 var conn=require('./conecction');
 //Importamos el paquete mysql
 var mysql = require('mysql2'),
 //Creamos la conexión a nuestra base de datos con los datos almacenados en conn
 connection = mysql.createConnection(
     conn
 );

var categorias = {};
 //Obtenemos todos las categorias
categorias.getCategorias = function(callback)
{
if (connection)
{
connection.query('SELECT * FROM categoria', function(error, rows) {
if(error)
{
throw error;
}
else
{
callback(null, rows);
}
});
}
}



module.exports =categorias;