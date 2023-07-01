const { Router } = require("express");
const { addProduct, add } = require("../controller/add.controller");
const userMiddleware = require("../middleware/user.middleware")
const authMiddleware = require("../middleware/auth");
const { getAllProducts, getProducts, getProductById, editProduct, editProductSave, deleteProduct } = require("../controller/product.controller");

const router = Router();

router.get("/", getAllProducts);
router.get("/products", getProducts);
router.get("/add", authMiddleware, add);
router.get("/product/:id", getProductById);
router.get("/edit-product/:id", editProduct)

router.post("/add-products",userMiddleware, addProduct);
router.post("/edit-product/:id",userMiddleware, editProductSave);
router.post("/delete-product/:id", userMiddleware, deleteProduct);


module.exports = router;