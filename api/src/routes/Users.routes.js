const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  createNewUser,
  updateAdmin,
} = require("../controllers/userControllers");

router.get("/", getAllUsers);

router.post("/", createNewUser);

router.put("/admin/:id", updateAdmin);

module.exports = router;
