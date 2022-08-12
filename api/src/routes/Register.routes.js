const { Router } = require("express");
const router = Router();
const {
    registerUser,
} = require("../controllers/registerControllers");

router.post("/", registerUser)

module.exports = router;