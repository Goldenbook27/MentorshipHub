const jwt = require('jsonwebtokens');
require('dotenv').config({path: 'env'});

module.exports.createAccessToken = (user) => {
    const secret = process.env.JWT_ACCESS_SIGNATURE;
    const token = sign({ userId: User.id, role: User.roleModel }, secret, {expiresIn: "15m"});
    return token;
}