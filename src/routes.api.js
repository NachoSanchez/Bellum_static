const express = require('express');
const router = express.Router();
const tratamientos = require('../tratamientos');

router.get('/', (req,res)=>{
    res.send(tratamientos);
});

module.exports = router;