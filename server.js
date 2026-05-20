const express=require("express");
const dotenv=require("dotenv");
const emplyeeRoutes=require("./routes/employeeRoutes");
const connectDB=require("./config/db");

dotenv.config();

connectDB();

const app=express();

app.use(express.json());

app.use("/employees",emplyeeRoutes);

const PORT=process.env.PORT||3001;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})