import {asyncHandler} from '../utilis/asyncHandler.js'
import {ApiError} from "../utilis/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utilis/cloudinary.js"
import { ApiResponse } from '../utilis/ApiResponse.js'

const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,fullName,password} = req.body
    console.log(email)
    if(
        [fullName, email, username, password].some((field)=>
            field?.trim()===""
        )) {
        throw new ApiError(400,"fullname is required")
    }

    const existedUser = await User.findOne({
        $or:[{ username },{ email }]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or username already exists.")
    }
    const avatarLocalPath  = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverimage[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400,"Avatar is required")
    }


    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(400,"Something went wrong registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Registered Successfully!")
    )
})

export {registerUser}