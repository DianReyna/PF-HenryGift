const { createNewOrder, getAllOrders, getUserOrders,sendEmailCode } = require('../controllers/ordersControllers');

const router = require('express').Router();

router.get("/",getAllOrders)

router.post('/',createNewOrder );

router.post("/sendcode",sendEmailCode)

//router.get("/user",getUserOrders)
module.exports = router;