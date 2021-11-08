 //Importamos los datos de la conexión
 var conn=require('./conecction');
 //Importamos el paquete mysql
 var mysql = require('mysql2'),
 //Creamos la conexión a nuestra base de datos con los datos almacenados en conn
 connection = mysql.createConnection(
     conn
 );

var detalles = {};
 //Obtenemos todos las detalles factura
 //Obtenemos todos los productos por categorias
 detalles.getDetallesByIdFactura = function(id,callback)
 {
 if (connection)
 {
 var sql = 'select idProducto,Categoriaid,categoria.nombre as categoria,producto.nombre, producto.url_image, producto.precio,detalle.cantidad,detalle.precio as preciototal from altipal.factura ' 
            +'inner join detalle on factura.idFactura = detalle.Facturaid inner join producto on detalle.Productoid = producto.idProducto '
            +'inner join categoria on producto.Categoriaid = categoria.idCategoria WHERE idFactura = ' + connection.escape(id);
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

module.exports =detalles;