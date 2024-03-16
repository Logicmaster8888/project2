const express = require('express');
const router = express.Router()

const pokemon = require('../models/pokemon');

router.get('/pokemon/:name', (req, res) => {
    res.send({pokemon: pokemon.filter(p => p === req.params.name)})
}) 

module.exports = router


