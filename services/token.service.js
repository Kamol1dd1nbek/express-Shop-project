const jwt = require('jsonwebtoken');
const config = require('config');

const generateJwtToken = userId => {
    const accessToken = jwt.sign({userId}, config.get("accessKey"), {expiresIn: config.get("accessTime")});

    return accessToken
}

module.exports = {generateJwtToken};