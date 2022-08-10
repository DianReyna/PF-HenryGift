const express = require("express");
const router = express.Router();
const {
  getAllProviders,
  createNewProvider,
  deleteProvider,
  updateProvider,
} = require("../controllers/providerControllers");

router.get("/", getAllProviders);
router.post("/", createNewProvider);
router.delete("/:id", deleteProvider);
router.put("/:id", updateProvider);

module.exports = router;
