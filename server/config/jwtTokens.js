const jwt = require('jsonwebtoken');
require('dotenv').config({path: 'env'});
const User = require('../models/users');

module.exports.createAccessToken = (user) => {
    const secret = process.env.JWT_ACCESS_SIGNATURE;
    const token = jwt.sign({ userId: User.id, role: User.roleModel }, secret, {expiresIn: "15m"});
    return token;
}
