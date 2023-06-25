const getRegister = (req, res) => {
    res.render("register", {
        title: "Register | Book Shop",
        isLogin: true
    });
}

const postRegister = (req, res) => {
    console.log(req.body);
    res.redirect("/");
}


module.exports = {
    getRegister,
    postRegister
}