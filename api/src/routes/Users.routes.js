const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  createUser,
  updateUser
} = require("../controllers/userControllers");
const { route } = require("./providerRoutes");

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
