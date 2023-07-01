const { isValidObjectId } = require("mongoose");
const Product = require("../models/Product.model");

const getAllProducts = async (req, res) => {
    const products = await Product.find({}).lean();
    res.render("index", {
        title: "Main Page | Book Shop",
        products: products.reverse(),
        userId: req.userId ? req.userId.toString() : null
    });
}

const getProducts = async (req, res) => {
    const user = req.userId ? req.userId.toString() : null;

    const myProducts = (await Product.find({user: user}).populate("user").lean()).reverse();
    res.render("products", {
        title: "Products | Book Shop",
        isProducts: true,
        myProducts
    });
}

const getProductById = async (req, res) => {
    const id  = req.params.id;

    const product = await Product.findById(id).populate("user").lean();


    res.render("product", {
        product
    });
}

const editProduct = async (req, res) => {
    const id = req.params.id;

    const product = await Product.findById(id).lean();

    res.render("editProduct", {
        product,
        errorEditProduct: req.flash("errorEditProduct")
    });
}

const editProductSave = async (req, res) => {
    const {title, description, image, price } = req.body;
    const id  = req.params.id;

    if (!title || !description || !image || !price) {
        req.flash("errorEditProduct", "All fields is required");
        res.redirect(`/edit-product/${id}`);
        return;
    }

    await Product.findByIdAndUpdate(id, req.body, {new: true});
    res.redirect("/");
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);
    res.redirect("/");
}

module.exports = {
    getAllProducts,
    getProducts,
    getProductById,
    editProduct,
    editProductSave,
    deleteProduct
}