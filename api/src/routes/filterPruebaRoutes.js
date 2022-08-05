const { Router } = require("express");
const { getBoxesFilterByPrice } = require("../controllers/filterPruebaControllers");
const router = Router();

router.get("/",getBoxesFilterByPrice);



module.exports = router;
