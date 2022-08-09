const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const categotyRouter = require("./categoryRoutes");
const products = require("../routes/Products.routes.js");
const filtersRoutes = require("./filtersRoutes.js");
const providerRouter = require("./providerRoutes")
const sortRouter = require("./sortRoutes")
const testRouter = require("./testRoutes")
router.use("/boxes", AllBoxes);
router.use("/products", products);
router.use("/categories",categotyRouter)
router.use("/providers",providerRouter)

router.use("/filters", filtersRoutes);
router.use("/sort",sortRouter)
router.use("/test",testRouter)
module.exports = router;
