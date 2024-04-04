const User = require('../models/users');

module.exports.register = async (req,res) => {
    try {
        const { name, email, username, password, bio, role, profilePic} = req.body;
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            response.message = "Email has already been registered";
            return res.status(400).json({ message: "Email has already been registered" });
        }
        let user = new User({
            name,
            email,
            username,
            password,
            bio,
            role,
            profilePic
        });
        const savedUser = await user.save();
        console.log(savedUser)
        return res.status(201).json({ message: "User registered successfully", user: savedUser });

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Internal server error"})
    }
};