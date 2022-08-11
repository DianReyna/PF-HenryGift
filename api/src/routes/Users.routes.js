const { Router } = require("express");
const router = Router();
const {
  getAllUsers, createNewUser,
} = require("../controllers/userControllers");

router.get("/", getAllUsers);

router.post("/", createNewUser);


module.exports = router;
