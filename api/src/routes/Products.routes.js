const { Router } = require("express");
const router = Router();
const {
  getProductById,
  createNewProduct,
} = require("../controllers/providerControllers");

router.get("/:id", getProductById);

router.post("/", createNewProduct);

module.exports = router;
