const express = require('express')

const router = express.Router();

const productsController = require('../controllers/products')

// CREATE => POST
router.post('/api/product',productsController.createProduct)

// READ => GET
router.get('/api/products',productsController.getProduct)

module.exports = router;
