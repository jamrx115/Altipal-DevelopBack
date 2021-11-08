var express = require("express");
var router=express.Router();
var bodyParser  = require("body-parser");
var aplicacion = express();
var clientes=require("./routes/rutasClientes");
var categorias = require("./routes/rutasCategorias");
var productos = require("./routes/rutasProductos");
var facturas = require("./routes/rutasFacturas");
var detalles = require("./routes/rutasDetalle");
router.get('/', function(request, response) {  
   response.status(200).json({"mensaje":"Altipal"});
});
aplicacion.use(bodyParser.json()); 
//incluimos el archivo en el que se almacenan las rutas de cada entidad
aplicacion.use(router);  
aplicacion.use(clientes);
aplicacion.use(categorias);
aplicacion.use(productos);
aplicacion.use(facturas);
aplicacion.use(detalles);

aplicacion.listen(5000, function() {
console.log("Servidor iniciado");
});

