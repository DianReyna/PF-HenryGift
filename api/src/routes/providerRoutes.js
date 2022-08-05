const express = require("express");
const router = express.Router();
const {
  getAllProviders,
  createNewProvider,
} = require("../controllers/providerControllers");

router.get("/", getAllProviders);
router.post("/", createNewProvider);

module.exports = router;
