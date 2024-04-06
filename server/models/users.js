const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'Username is required'],
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: [true,'Enter your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique:true,
        trim: true
    },
    password: {
        type: String,
        required: [true,'Enter the password'],
        trim: true
    },
    bio: {
        type: String
    },
    profilePic: {
        type: Number,
        required: [true,'select any of the above']
    },
    role: {
        type: String,
        enum: ['mentor', 'mentee'],
        required: true
    }  
},{timestamps:true})

module.exports = mongoose.model("User", userSchema);