const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const categotyRouter = require("./categoryRoutes");
const products = require("../routes/Products.routes.js");
<<<<<<< HEAD
const providerRouter = require("./providerRoutes")
const pruebaRouter = require("../routes/filterPruebaRoutes")
router.use("/boxes", AllBoxes);
router.use("/products", products);
router.use("/categories",categotyRouter)
router.use("/providers",providerRouter)
router.use("/filter",pruebaRouter)
=======
const providerRouter = require("./providerRoutes");
const filtersRoutes = require("./filtersRoutes.js");

router.use("/boxes", AllBoxes);
router.use("/products", products);
router.use("/categories", categotyRouter);
router.use("/providers", providerRouter);
router.use("/filters", filtersRoutes);

>>>>>>> 0523349152283a933c86bcdadc4e323c290a9f4e
module.exports = router;
