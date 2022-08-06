const { Router } = require("express");
const router = Router();
const {
  getProductById,
  createNewProduct,
  getAllProducts,
} = require("../controllers/productController.js");

router.get("/",getAllProducts)

router.get("/:id", getProductById);

router.post("/", createNewProduct);

module.exports = router;
