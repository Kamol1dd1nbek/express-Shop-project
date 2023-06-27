const { Router } = require("express");
const { addProduct, add } = require("../controller/add.controller");
const userMiddleware = require("../middleware/user.middleware")
const authMiddleware = require("../middleware/auth");
const { getAllProducts, getProducts, getProductById } = require("../controller/product.controller");

const router = Router();

router.get("/", getAllProducts);
router.get("/products", getProducts);
router.get("/add", authMiddleware, add);
router.get("/product/:id", getProductById)

router.post("/add-products",userMiddleware, addProduct);

module.exports = router;