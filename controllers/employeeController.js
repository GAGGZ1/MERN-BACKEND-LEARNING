const Employee = require("../models/Employee");


//Get all employees
const getEmployees=async (req,res)=>{
  try{
    const page=parseInt(req.params.page) || 1;
    const limit=parseInt(req.params.limit) || 5;

    //calculate skip
    const skip=(page-1)*limit;

    //fetch paginated employees
    const employees=await Employee.find().skip(skip).limit(limit);

    //total count
    const totalEmployees=await Employee.countDoucuments();
    res.status(200).json({
      currrentPage:page,
      totalPage:Math.cell(totalEmployees/limit),
      totalEmployees,
      employees
    });
  }
  catch(error){
    res.status(500).json({
      message:error.message
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

  try{
    const employee=await Employee.create(req.body);
    res.status(201).json(employee);
  }
  catch(error){
    if(error.name==="ValidationError"){
      const message=Object.values(error.errors).map(val=>val.message);
      return res.status(400).json({
        errors:message
      });
    }
    res.status(500).json({
      message:error.message
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
const deleteEmployee=async (req,res)=>{
  try{
const employee=await Employee.findByIdAndDelete(req.params.id);
if(!employee){
  return res.status(404).json({
    message:"Employee not found"
  })

}
res.json({
  message:"Employee deleted"
})
  }
  catch(error){
    res.status(500).json({
      message:error.message
    })
  }
}

module.exports={
  getEmployeeById,
  getEmployees,
  createEmployees,
  updateEmployee,
  deleteEmployee
}

