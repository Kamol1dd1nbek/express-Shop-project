const Product = require("../models/Product.model");

const add = async (req, res) => {
        res.render("add", {
            title: "Add | Book Shop",
            isAdd: true,
            errorAddProduct: req.flash("errorAddProduct")
        });
}


const addProduct = async (req, res) => {
    const {title, description, image, price } = req.body;

    if (!title || !description || !image || !price) {
        req.flash("errorAddProduct", "All fields is required");
        res.redirect("/add");
        return;
    }

    await Product.create({...req.body, user: req.userId});

    res.redirect("/");
}

module.exports = {
    addProduct,
    add
}