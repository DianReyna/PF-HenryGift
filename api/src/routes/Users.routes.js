const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateAdmin,
  updateUser,
  deleteUser
} = require("../controllers/userControllers");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createNewUser);
router.put("/admin/:id", updateAdmin);
router.put("/user/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
