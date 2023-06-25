const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const flash = require('connect-flash');
const getLogin = (req, res) => {
    res.render("login", {
        title: "LogIn | Book Shop",
        isLogin: true,
        loginError: req.flash("loginError")
    });
}

const postLogin = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if(!email || !password) {
        req.flash("loginError", "All fields is required");
        res.redirect("/login");
        return;
    }

    const existUser = await User.findOne({email});

    if (!existUser) {
        req.flash("loginError", "User not found")
        res.redirect("/login");
        return;
    }

    const isPasswordEqual = await bcrypt.compare(password, existUser.password);

    if (!isPasswordEqual) {
        req.flash("loginError", "Incorrect email or password");
        res.redirect("/login");
        return;
    }

    res.redirect("/");
}


module.exports = {
    getLogin,
    postLogin
}