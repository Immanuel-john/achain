const express = require('express');
const router = express.Router()
var service = require('../services/ownership')

router.post('/create',(req,res)=>{
    //Create ownership
    service.create(req).then((response)=>{
        res.status(200).send(response)
    })


})

router.get('/read',()=>{
    //Read ownership
    service.read(req).then((response)=>{
        res.status(200).send(response)
    })
})

module.exports = router