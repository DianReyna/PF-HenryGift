const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
} = require("../controllers/userControllers");

router.get("/", getAllUsers);

module.exports = router;
