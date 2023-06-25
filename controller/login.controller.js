const getLogin = (req, res) => {
    res.render("login", {
        title: "LogIn | Book Shop",
        isLogin: true
    });
}

const postLogin = (req, res) => {
    console.log(req.body);
    res.redirect("/");
}


module.exports = {
    getLogin,
    postLogin
}