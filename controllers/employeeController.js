const employees=require("../models/Employee");

//Get all employees
const getEmployees=async (req,res)=>{
  try{
    const employees=await Employee.find();
    res.json(employees);
  }
  catch(error){
    res.status(500).json({
      message:"error.message"
    })
  }
};

//get employee by ID
const getEmployeeById=async (req,res)=>{
  try{
    const employee =await Employee.findById(req.params.id);
    if(!employee){
      return res.status(404).json({
        message:"Employee not found"
      })
    }
    res.json(employee)
  }
  catch(error){
    res.status(500).json({
      message:error.message
    })

  }
}

//create employee
const createEmployees=async (req,res)=>{

  try{  const {name,role,salary}=req.body;
  const employee=await Employee.create({
    
    name,
    role,
    salary
  });
  res.status(201).json(employee);}
  catch(error){
    res.status(500).json({
      message:error.messge
    })
  }
  
}

//update employee
const updateEmployee=async (req,res)=>{

  try{
    const employee=await Employee.findByIdAndUpdate(
      req.params.id,req.body,{
        new:true
      }
    );
    if(!employee){
      return res.status(404).json({
        message:"Employee not found"
      })
    }
    res.json(employee);
  }
  catch(error){
    res.status(500).json({
      message:error.message
    })
  }
};

//Delete employee
const deleteEmployee=(req,res)=>{
  const id=parseInt(req.params.id);

  const index=employees.findIndex(emp=>emp.id===id);

  if(index===-1){
    return res.status(404).json({
      message:"Employee not found"
    });
  }
  employees.splice(index,1);
  res.json({
    message:"Employee deleted"
  });
}

module.exports={
  getEmployeeById,
  getEmployees,
  createEmployees,
  updateEmployee,
  deleteEmployee
}

