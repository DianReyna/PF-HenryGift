const { Router } = require("express");
const router = Router();
const {
    registerUser,
    getToken
} = require("../controllers/registerControllers");

router.post("/", registerUser)

router.get("/:id/verify/:token", getToken)

module.exports = router;