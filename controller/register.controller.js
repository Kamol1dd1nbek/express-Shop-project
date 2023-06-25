const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const flash = require("connect-flash");
const config = require('config');
const { generateJwtToken } = require("../services/token.service");

const getRegister = (req, res) => {
    res.render("register", {
        title: "Register | Book Shop",
        isRegister: true,
        registerError: req.flash("registerError")
    });
}

const postRegister = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    if (!firstName || !lastName || !email || !password) {
        req.flash("registerError", "All fields is required");
        res.redirect("/register");
        return;
    }

    const existUser = await User.findOne({email});

    if(existUser) {
        req.flash("registerError", "This user is already registered");
        res.redirect("/register");
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });
    
    const token = generateJwtToken(user._id);

    res.cookie("accessToken", token, {
        httpOnly: true,
        maxAge: config.get("refresh_ms"),
        secure: true
    });

    res.redirect("/");
}


module.exports = {
    getRegister,
    postRegister
}