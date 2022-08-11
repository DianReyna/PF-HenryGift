const { createNewOrder, getAllOrders, getUserOrders } = require('../controllers/ordersControllers');

const router = require('express').Router();

router.get("/",getAllOrders)

router.post('/',createNewOrder );

router.get("/user",getUserOrders)
module.exports = router;