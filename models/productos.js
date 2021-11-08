 //Importamos los datos de la conexión
 var conn=require('./conecction');
 //Importamos el paquete mysql
 var mysql = require('mysql2'),
 //Creamos la conexión a nuestra base de datos con los datos almacenados en conn
 connection = mysql.createConnection(
     conn
 );

var productos = {};
 //Obtenemos todos los productos por categorias
 productos.getProductosByIdCategoria = function(id,callback)
 {
 if (connection)
 {
 var sql = 'SELECT * FROM producto WHERE Categoriaid = ' + connection.escape(id);
 connection.query(sql, function(error, row)
 {
 if(error)
 {
 throw error;
 }
 else
 {
 callback(null, row);
 }
 });
 }
 }
 // obtenemos el producto por su id
 productos.getProductosByIdProducto = function(id,callback)
 {
 if (connection)
 {
 var sql = 'SELECT * FROM producto WHERE idProducto = ' + connection.escape(id);
 connection.query(sql, function(error, row)
 {
 if(error)
 {
 throw error;
 }
 else
 {
 callback(null, row);
 }
 });
 }
 }
module.exports =productos;