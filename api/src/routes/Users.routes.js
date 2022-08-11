const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  createNewUser,
  updateAdmin,
  updateUser,
} = require("../controllers/userControllers");
const { route } = require("./providerRoutes");

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.put("/admin/:id", updateAdmin);


router.put("/:id", updateUser);
router.post("/", createNewUser);



module.exports = router;
