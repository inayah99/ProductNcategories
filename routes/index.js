const express = require('express')
const productRoute = require('../controller/product.controller')
const categoriesRoute = require('../controller/categories.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

router.get('/product', productRoute.listProduct)
router.get('/product/:id', productRoute.detailProduct)
router.post('/product', productRoute.insertProduct)
router.put('/product/:id', productRoute.updateProduct)
router.delete('/product/:id', productRoute.deleteProduct)

router.get('/categories', categoriesRoute.listCategories)
router.get('/categories/:id', categoriesRoute.detailCategories)
router.post('/categories', categoriesRoute.insertCategories)
router.put('/categories/:id', categoriesRoute.updateCategories)
router.delete('/categories/:id', categoriesRoute.deleteCategories)

module.exports = router