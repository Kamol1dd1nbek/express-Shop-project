const Product = require("../models/Product.model");

const addProduct = async (req, res) => {
    const {title, description, image, price } = req.body;

    const product = await Product.create(req.body);

    res.redirect("/");
}

module.exports = {
    addProduct
}