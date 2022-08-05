const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const categotyRouter = require("./categoryRoutes");
const products = require("../routes/Products.routes.js");
const providerRouter = require("./providerRoutes");
const filtersRoutes = require("./filtersRoutes.js");

router.use("/boxes", AllBoxes);
router.use("/products", products);
router.use("/categories", categotyRouter);
router.use("/providers", providerRouter);
router.use("/filters", filtersRoutes);

module.exports = router;
