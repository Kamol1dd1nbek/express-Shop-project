const auth = (req, res, next) => {
    if (!req.cookies.accessToken) {
        res.redirect("/login");
        return;
    }
    next();
}

module.exports = auth