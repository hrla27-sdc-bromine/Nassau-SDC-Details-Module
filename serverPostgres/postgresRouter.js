const express = require ('express');
const router = require ('express').Router();
const {getProduct, deleteProduct, updateProduct, addProduct} = require ('./postgresControllers.js');

router.route('/:id')
.get (getProduct)
.delete (deleteProduct)
.put (updateProduct)

router.route('/')
.post (addProduct)

module.exports = router;