const jwt = require("jsonwebtoken");
const config = require('config');
const User = require("../models/User.model");
const user = async (req, res, next) => {
    if (!req.cookies.accessToken) {
        next();
        return;
    }

    const accessToken = req.cookies.accessToken;
    const decode = jwt.verify(accessToken, config.get("accessKey"));
    const user = await User.findOne({_id: decode.userId});
    req.userId = user._id;
    req.token = accessToken;
    
    next();
}

module.exports = user;