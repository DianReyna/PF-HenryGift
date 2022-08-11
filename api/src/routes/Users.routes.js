const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  createNewUser,
  updateAdmin,
  // updateUser,
} = require("../controllers/userControllers");

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.put("/admin/:id", updateAdmin);
// router.put("/:id", updateUser);

module.exports = router;
