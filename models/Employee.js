const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is required"],
    minlength:[3,"Name must be at lease 3 characters"],
    trim:true
  },
  role:{
    type:String,
    required:[true,"Role is required"]
  },
  salary:{
    type:Number,
    required:[true,"Salary is required"],
    min:[0,"Salary cannot be negative"]
  }
},{
  timestamps:true
});

module.exports=mongoose.model("Emloyee",employeeSchema);