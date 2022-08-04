const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const categotyRouter = require("./categoryRoutes")
const products = require("../routes/Products.routes.js");

router.use("/boxes", AllBoxes);
router.use("/products", products);
router.use("/categories",categotyRouter)


module.exports = router;
