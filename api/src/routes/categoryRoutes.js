const express = require("express");
const {
  createNewCategory,
  getAllCategories,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryControllers");
const router = express.Router();

router.post("/", createNewCategory);
router.get("/", getAllCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
