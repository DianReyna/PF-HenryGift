const { Router } = require("express");
const { getAllBoxes } = require("../controllers/testController");

const router = Router();


router.get("/",getAllBoxes)


module.exports = router;