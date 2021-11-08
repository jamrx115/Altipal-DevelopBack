var express = require('express');
const detalles = require('../models/detalle');
var router = express.Router();

router.get('/detalles/:idFactura', function(request, response) {

    var idFactura = request.params.idFactura;
    detalles.getDetallesByIdFactura(idFactura,function(error, datos)
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