const express=require("express");
const emplyeeRoutes=require("./routes/employeeRoutes");

const app=express();

app.use(express.json());

app.use("/employees",emplyeeRoutes);

const PORT=3001;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})