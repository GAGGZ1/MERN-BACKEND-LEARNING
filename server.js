const express=require("express");
const dotenv=require("dotenv");
const emplyeeRoutes=require("./routes/employeeRoutes");
const connectDB=require("./config/db");
const loggerMiddleware=require("./middleware/loggerMiddleware");
const errorMiddleware=require("./middleware/errorMiddleware");

app.use(errorMiddleware);
app.use(loggerMiddleware);

dotenv.config();

connectDB();

const app=express();


app.use(express.json());
const authRoutes=require("./routes/authRoutes");
app.use("/auth",authRoutes)
app.use("/employees",employeeRoutes);


const PORT=process.env.PORT||3001;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})