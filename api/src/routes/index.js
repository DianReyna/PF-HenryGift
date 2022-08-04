const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const products = require("../routes/Products.routes.js");

router.use("/boxes", AllBoxes);
router.use("/products", products);

module.exports = router;
