const { Router } = require("express");
const router = Router();
const {
    googleLogin
} = require("../controllers/googleLoginControllers");

router.post("/", googleLogin);

module.exports = router;
