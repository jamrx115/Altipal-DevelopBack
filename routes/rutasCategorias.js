var express = require('express');
const categorias = require('../models/categorias');
var router = express.Router();

//coger todas las categorias
router.get('/categorias', function(request, response) {

categorias.getCategorias(function(error, data)
{
response.status(200).json(data);
});
});

module.exports = router;