const { Router } = require("express");
const router = Router();
const { getFilter } = require("../controllers/filtersControllers.js");

router.get("/", getFilter);

module.exports = router;
