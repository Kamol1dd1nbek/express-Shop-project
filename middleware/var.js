const authorization = (req, res, next) => {
    const isAuth = req.cookies.accessToken ? true : false;
    res.locals.token = isAuth;
    next();
}

module.exports = {authorization};