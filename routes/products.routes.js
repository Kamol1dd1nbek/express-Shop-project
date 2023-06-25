const { Router } = require("express");
const { addProduct, add } = require("../controller/add.controller");
const userMiddleware = require("../middleware/user.middleware")
const authMiddleware = require("../middleware/auth");
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

router.get("/add", authMiddleware, add);
router.post("/add-products",userMiddleware, addProduct);

module.exports = router;