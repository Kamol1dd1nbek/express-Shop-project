const { Router } = require("express");
const { getLogin, postLogin } = require("../controller/login.controller");
const { getRegister, postRegister } = require("../controller/register.controller");
const router = Router();

router.get("/login", getLogin);
router.post("/login", postLogin);


router.get("/register", getRegister);
router.post("/register", postRegister);

module.exports = router;