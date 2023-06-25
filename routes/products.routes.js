const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Main Page | Book Shop",
    });
});
router.get("/products", (req, res) => {
    res.render("products", {
        title: "Products | Book Shop",
        isProducts: true
    });
});
router.get("/add", (req, res) => {
    res.render("add", {
        title: "Add | Book Shop",
        isAdd: true
    });
});

module.exports = router;