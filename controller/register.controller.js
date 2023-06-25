const User = require("../models/User.model");
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

    const user = await User.create({
        firstName,
        lastName,
        email,
        password
    });
    console.log(user);
    res.redirect("/");
}


module.exports = {
    getRegister,
    postRegister
}