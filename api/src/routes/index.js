const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const categotyRouter = require("./categoryRoutes")

router.use("/boxes", AllBoxes);
router.use("/categories",categotyRouter)
module.exports = router;
