const { Router } = require("express");
const router = Router();
const {
    confirmation,
} = require("../controllers/emailConfirmationControllers.js");

router.get("/", confirmation)

module.exports = router;