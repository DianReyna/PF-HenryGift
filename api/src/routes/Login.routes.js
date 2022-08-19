const { Router } = require("express");
const router = Router();
const {
    loginUser,
    forgotPassword,
    resetpassword
} = require("../controllers/loginControllers");

router.post("/", loginUser)
router.post("/forgotpassword", forgotPassword)
router.put("/resetpassword/:email",resetpassword)

module.exports = router;