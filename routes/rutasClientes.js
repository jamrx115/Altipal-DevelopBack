//Importamos express
var express = require('express');
//Creamos el objeto para definir las rutas
var router = express.Router();
//Importamos el modelo que ejecutará las sentencias SQL
var clientes = require('../models/clientes');

//Coger todos los clientes
router.get('/clientes', function(request, response) {

clientes.getClientes(function(error, data)
{
response.status(200).json(data);
});
});

//Coger cliente por id
router.get('/cliente', function(request, response) {

var id = request.query.id;
clientes.getClienteById(id,function(error, datos)
{

    if (typeof data !== 'undefined' && datos.length > 0)
    {
      response.status(200).json(datos);
    }
    else
    {
      response.status(404).json({"Mensaje":"No existe"});
    }
  });
});


//Insertar usuario
/*
Ejemplo de uso:
en el Body:
{
"nombre": "Usuario de Prueba"
}

*/
router.post('/cliente', function(request, response) {
var datosCliente = {
nombresapellidos: request.body.nombresapellidos,
email : request.body.email,
password : request.body.password
};
clientes.insertCliente(datosCliente,function(error, datos)
{
if(datos)
{
response.status(200).json({"Mensaje":"Insertado","idCliente":datos});
}
else
{
response.status(500).json({"Mensaje":"Error"});
}
});
});


//Modificar un cliente
router.put('/cliente', function(request, response) {

var datosCliente = {
id:request.query.id,
nombre : request.query.nombre
};

clientes.updateCliente(datosUsuario,function(error, datos)
{
  //si el cliente se ha actualizado correctamente mostramos un mensaje
  if(datos && datos.mensaje)
  {
    response.status(200).json(datos);
  }
  else
  {
    response.status(500).json({"mensaje":"Error"});
    
  }
});


});
//Borrar un cliente

router.delete('/cliente', function(request, response) {

var id = request.query.id;
clientes.deleteCliente(id,function(error, datos)
{
if(datos && datos.mensaje === "Borrado")
{
response.status(200).json(datos);
}
else
{
response.status(500).json({"mensaje":"Error"});
}
});

});

module.exports = router;