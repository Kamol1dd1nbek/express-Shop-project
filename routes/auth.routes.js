const { Router } = require("express");
const router = Router();

router.get("/login", (req, res) => {
    res.render("login", {
        title: "LogIn | Book Shop"
    });
});
router.get("/register", (req, res) => {
    res.render("register", {
        title: "Register | Book Shop"
    });
});

module.exports = router;