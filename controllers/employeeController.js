const Employee = require("../models/Employee");


//Get all employees
const getEmployees=async (req,res)=>{
  try{
    const page=parseInt(req.query.page) || 1;
    const limit=parseInt(req.query.limit) || 5;
     const search = req.query.search || "";

    //calculate skip
    const skip=(page-1)*limit;

     const query = {
      name: {
        $regex: search,
        $options: "i" //case insensitive
      }
    };

    //fetch paginated employees
    const employees=await Employee.find(query).sort({createdAt:-1}).skip(skip).limit(limit); //sort to get newest employees first

    //total count
    const totalEmployees=await Employee.countDocuments(query);
    res.status(200).json({
      currrentPage:page,
      totalPage:Math.ceil(totalEmployees/limit),
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
      return res.status(404);
      throw new Error("Employee not found");
    }
    res.json(employee)
  }
  catch(error){
    next(error);
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

