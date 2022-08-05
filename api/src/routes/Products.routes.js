const { Router } = require("express");
const router = Router();
<<<<<<< HEAD
const { Products, Provider } = require("../database/index.js");
const productController = require("../controllers/productController.js");

router.get("/",productController.getAllProducts)

router.get("/:id", productController.getProductById);

router.post("/", productController.createNewProduct);

module.exports = router;
=======
const {
  getProductById,
  createNewProduct,
} = require("../controllers/productController.js");

router.get("/:id", getProductById);

router.post("/", createNewProduct);

module.exports = router;
>>>>>>> e184f73668429ea058859b6265720a31a0b701ae
