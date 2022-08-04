const  express = require("express");
const { createNewCategory,getAllCategories } = require("../controllers/categoryControllers");
const router = express.Router()

router.post("/",createNewCategory)
router.get("/",getAllCategories)

module.exports = router;