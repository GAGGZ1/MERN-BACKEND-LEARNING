const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User=require("../models/User")
const generateAccessToken=require("../utils/generateToken");
// Register User
const registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Password hashing handled by pre-save middleware
    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "User registered"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// Login User
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({ token });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

//Refresh Token API
const refreshAccessToken=async(req,res,next)=>{
  try{
    const {refreshToken}=req.body;
    if(!refreshToken){
      return res.status(401).json({
        message:"Refresh token required"
      });
    }
    const decoded=jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);

    const user=await User.findById(decoded.id);
    if(!user || user.refreshToken!==refreshToken){
      return res.status(402).json({
        message:"Invalid refresh token"
      });
    }
    //generate new access token
    const accessToken=generateAccessToken(user);
    res.json({accessToken});
  }
  catch(error){
    next(error);
  }


}

module.exports = {
  registerUser,
  loginUser
};