const { Router } = require("express");
const router = Router();
const {
<<<<<<< HEAD
  getAllUsers,
  createNewUser,
  createUser,
  updateUser,

=======
  getAllUsers, createNewUser,
>>>>>>> origin/dev
} = require("../controllers/userControllers");
const { route } = require("./providerRoutes");

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.post("/", createUser);
router.put("/:id", updateUser);



router.post("/", createNewUser);


module.exports = router;
