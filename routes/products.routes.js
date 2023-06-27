const { Router } = require("express");
const { addProduct, add } = require("../controller/add.controller");
const userMiddleware = require("../middleware/user.middleware")
const authMiddleware = require("../middleware/auth");
const Product = require("../models/Product.model");
const router = Router();

router.get("/", async (req, res) => {
    const products = await Product.find({}).lean();
    res.render("index", {
        title: "Main Page | Book Shop",
        products: products.reverse(),
        userId: req.userId ? req.userId.toString() : null
    });
});
router.get("/products", async (req, res) => {
    const user = req.userId ? req.userId.toString() : null;

    const myProducts = (await Product.find({user: user}).populate("user").lean()).reverse();
    res.render("products", {
        title: "Products | Book Shop",
        isProducts: true,
        myProducts
    });
});

router.get("/add", authMiddleware, add);
router.post("/add-products",userMiddleware, addProduct);

module.exports = router;