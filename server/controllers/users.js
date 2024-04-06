const User = require('../models/users');
const bcrypt = require('bcrypt');
const {createAccessToken} = require('../config/jwtTokens')

module.exports.register = async (req,res) => {
    try {
        const { name, email, username, password, bio, role, profilePic} = req.body;
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            response.message = "Email has already been registered";
            return res.status(400).json({ message: "Email has already been registered" });
        }
        const hashedPassword = await bcrypt.hashSync(password, 10);
        let user = new User({
            name,
            email,
            username,
            password: hashedPassword,
            bio,
            role,
            profilePic
        });
        const savedUser = await user.save();
        console.log(savedUser);

        const token = createAccessToken({ userId: user._id });
        return res.status(201).json({ token, savedUser, message: "User registered successfully" });

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
};

module.exports.login = async (req,res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user && !bcrypt.compareSync(password, user.password)){
            return res.status(401).json({message: "Invalid email or password"})
        }

        const token = createAccessToken(user);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};