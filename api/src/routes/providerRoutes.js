const  express = require("express");
const { getAllProviders } = require("../controllers/providerControllers");
const router = express.Router()

router.get("/",getAllProviders)

module.exports = router;