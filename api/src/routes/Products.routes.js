const { Router } = require("express");
const router = Router();
const {
  getProductById,
  createNewProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController.js");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createNewProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

module.exports = router;
