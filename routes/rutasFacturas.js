var express = require('express');
const facturas = require('../models/facturas');
var router = express.Router();

//coger todas las facturas
router.get('/facturas', function(request, response) {

facturas.getFacturas(function(error, data)
{
response.status(200).json(data);
});
});

module.exports = router;