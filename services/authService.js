const generateAccessToken=require("../utils/generateRefreshTokens");

const generateRefreshToken=require("../utils/generateRefreshTokens");

const loginUser=async({
  email,password
})=>{
  const user=await User.findOne({email});
  if(!user){
    throw new Error("Invalid credentials");
  }

  const isMatch=await bcrypt.compare(password,user.password);

  if(!isMatch){
    throw new Error("Invalid credentails");
  }

  const accessToken=generateAccessToken(user);
  const refreshToken=generateRefreshToken(user);

  user.refreshToken=refreshToken;
  await user.save();
  return {
    accessToken,refreshToken
  };
}

const logoutUser=async (userId)=>{
  const user=await User.findById(userId);

  if(user){
    user.refreshToken=null;
    await user.save();
  }

}