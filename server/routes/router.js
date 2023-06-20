const express = require('express');
const router = new express.Router();
const Products = require('../db/models/productSchema');


router.get('/getproducts',async(req,res)=>{
    try {
        const productData = await Products.find();
        // console.log(productData);
        res.status(201).json(productData);
    } catch (error) {
        res.status(400).json(productData);
        console.log(error.message);
    }
})

//get individual product data

router.get("/getproducts/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const individualData = await Products.findOne({id:id});
        res.status(201).json(individualData);
    } catch (error) {
        res.status(400).json(individualData)
        console.log(error.message);
    }
})

module.exports = router;