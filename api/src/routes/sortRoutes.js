const { Router } = require("express");
const { sortBoxes } = require("../controllers/sortControllers");
const router = Router();


router.get("/", sortBoxes);

module.exports = router;
