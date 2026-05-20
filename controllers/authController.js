const User=require("../models/User");
const bcrypt=requie("bcryptjs");
const jwt=require("jsonwebtoken")

const registerUser=async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    const existingUser=await User.findOne({email});
    if(existingUser){
      return res.status(400).json({
        message:"User already exists"
      });
    }
    const hashedPassword=await bcrypt.hash(password,10);
    //create User
    const user=await User.create({
      name,email,password:hashedPassword
    });
    res.status(201).json({
      message:"User registered"
    });
  }
  catch(error)
  {
    res.status(500).json({
      message:error.message
    })
  }
}

const loginUser=async (req,res)=>{
  try{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(!user){
      return res.status(401).json({
        message:"Invalid credentials"
      });
    }

    //compare passwords

    const isMatch=await bcrypt.compare(password,hashedPassword);

    if(!isMatch){
      return res.status(401).json({
        message:"Invalid credentials"
      })
    }

    //generate JWT token

    const token=jwt.sign({
      id:user._id
    },
  process.env.JWT_SECRET,
{
  expiresIn:"1d"
});

res.json({token});
  }
  catch(error){
    res.status(500).json({
      message:error.message
    })
  }
}