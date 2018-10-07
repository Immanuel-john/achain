const express = require('express');
const router = express.Router()
var service = require('../services/ownership')

router.post('/create',(req,res)=>{
    //Create ownership
    console.log("req",req.body)
    service.create(req.body).then((response)=>{
        res.status(200).send(response)
    })


})

router.get('/read',()=>{
    //Read ownership
    service.read(req.body).then((response)=>{
        res.status(200).send(response)
    })
})

module.exports = router