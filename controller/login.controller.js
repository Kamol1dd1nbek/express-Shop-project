const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const getLogin = (req, res) => {
    res.render("login", {
        title: "LogIn | Book Shop",
        isLogin: true
    });
}

const postLogin = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const existUser = await User.findOne({email});

    if (!existUser) {
        console.log("User not found");
        return;
    }

    const isPasswordEqual = await bcrypt.compare(password, existUser.password);

    if (!isPasswordEqual) {
        console.log("Email yoki parol noto'g'ri");
        return;
    }
    console.log(existUser);
    res.redirect("/");
}


module.exports = {
    getLogin,
    postLogin
}