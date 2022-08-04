const { Router } = require("express");
const router = Router();
const { Products, Provider } = require("../database/index.js");
const productController = require("../controllers/productController.js");

router.get("/:id", productController.getProductById);

router.post("/", productController.createNewProduct);

module.exports = router;
