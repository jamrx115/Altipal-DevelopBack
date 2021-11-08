 //Importamos los datos de la conexión
var conn=require('./conecction');
//Importamos el paquete mysql
var mysql = require('mysql2'),
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn
connection = mysql.createConnection(
	conn
);

//Creamos un objeto al que llamaremos clientes
var clientes = {};

//Obtenemos todos los clientes
clientes.getClientes = function(callback)
{
if (connection)
{
connection.query('SELECT * FROM cliente', function(error, rows) {
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

//Obtenemos un cliente por su id
clientes.getClienteById = function(id,callback)
{
if (connection)
{
var sql = 'SELECT * FROM cliente WHERE idCliente = ' + connection.escape(id);
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

//Añadir un nuevo cliente
clientes.insertCliente = function(clienteData,callback)
{
if (connection)
{
connection.query('INSERT INTO cliente SET ?', clienteData, function(error, result)
{
if(error)
{
throw error;
}
else
{
//devolvemos el id del cliente insertado
callback(null, result.insertId);
}
});
}
}

//Actualizar un cliente
clientes.updateCliente = function(datosCliente, callback)
{

if(connection)
{
	var sql = 'UPDATE cliente SET nombres = ' + connection.escape(datosCliente.nombre)  +' WHERE idCliente = ' + datosUsuario.id;
	connection.query(sql, function(error, result) 
	{
		if(error)
		{
			throw error;
		}
		else
		{
			callback(null,{"mensaje":"Actualizado"});
		}
	});
}
}

//Eliminar un Cliente por su id
clientes.deleteCliente = function(id, callback)
{
if(connection)
{
var sql = 'DELETE FROM cliente WHERE idCliente = ' + connection.escape(id);
connection.query(sql, function(error, result)
{
if(error)
{
throw error;
}
else
{
callback(null,{"mensaje":"Borrado"});
}
});
}
}

//loguear cliente
clientes.updateCliente = function(datosCliente, callback)
{

if(connection)
{
	var sql = 'SELECT cliente WHERE email = ' + datosCliente.email + 'AND password = ' +datosCliente.passord;
	connection.query(sql, function(error, result) 
	{
		if(error)
		{
			throw error;
		}
		else
		{
			callback(null,{"mensaje":"Actualizado"});
		}
	});
}
}

module.exports =clientes;
