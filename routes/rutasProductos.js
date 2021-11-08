var express = require('express');
const productos = require('../models/productos');
var router = express.Router();

router.get('/productos/:idCategoria', function(request, response) {

    var idCategoria = request.params.idCategoria;
    productos.getProductosByIdCategoria(idCategoria,function(error, datos)
    {
        if (typeof datos !== 'undefined' && datos.length > 0)
        {
          response.status(200).json(datos);
        }
        else
        {
          response.status(404).json({"Mensaje":"No existe "});
        }
      });
    });

router.get('/productos/producto/:idProducto', function(request, response) {

    var idProducto = request.params.idProducto;
    productos.getProductosByIdProducto(idProducto,function(error, datos)
    {
        if (typeof datos !== 'undefined' && datos.length > 0)
        {
            response.status(200).json(datos);
        }
        else
        {
            response.status(404).json({"Mensaje":"No existe "});
        }
        });
    });

module.exports = router;