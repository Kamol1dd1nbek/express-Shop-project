const User = require("../models/User.model");
const bcrypt = require('bcrypt');

const getRegister = (req, res) => {
    res.render("register", {
        title: "Register | Book Shop",
        isLogin: true
    });
}

const postRegister = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });
    console.log(user);
    res.redirect("/");
}


module.exports = {
    getRegister,
    postRegister
}