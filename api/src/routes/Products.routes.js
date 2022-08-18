const { Router } = require("express");
const router = Router();
const {
  getProductById,
  createNewProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  putStatusProduct,
} = require("../controllers/productController.js");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createNewProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

router.put("/status/:id", putStatusProduct);

module.exports = router;
