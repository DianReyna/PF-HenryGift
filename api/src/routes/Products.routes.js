const { Router } = require("express");
const router = Router();
const {
  getProductById,
  createNewProduct,
} = require("../controllers/productController.js");

router.get("/:id", getProductById);

router.post("/", createNewProduct);

module.exports = router;
