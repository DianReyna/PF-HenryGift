const { Router } = require("express");
const router = Router();
const AllBoxes = require("../routes/Boxes.routes.js");
const AllUsers = require("../routes/Users.routes.js");
const categotyRouter = require("./categoryRoutes");
const products = require("../routes/Products.routes.js");
const filtersRoutes = require("./filtersRoutes.js");
const providerRouter = require("./providerRoutes");

const testRouter = require("./testRoutes");
const payment = require("./stripe");
const register = require('./Register.routes.js')
const login = require('./Login.routes')
const orderRouter = require("./ordersRoutes")
const redeem = require("./giftRoutes")

router.use("/boxes", AllBoxes);
router.use("/products", products);
router.use("/categories", categotyRouter);
router.use("/providers", providerRouter);
router.use("/orders",orderRouter)
router.use("/filters", filtersRoutes);

router.use("/test", testRouter);
router.use("/users", AllUsers);
router.use("/payment", payment);
router.use('/register', register)
router.use('/login', login)
router.use("/redeem",redeem)
module.exports = router;
