const employees=require("../data/employees");

//Get all employees
const getEmployees=(req,res)=>{
  res.json(employees);
};

//get employee by ID
const getEmployeeById=(req,res)=>{
  const id=parseInt(req.params.id);
  const employee=employees.find(emp=>emp.id===id);

  if(!employee){
    return res.status(404).json({
      message:"Employee not found"
    });
  }
  res.json(employee);
}

//create employee
const createEmployees=(req,res)=>{
  const {name,role,salary}=req.body;
  const newEmployee={
    id:employees.length+1,
    name,
    role,
    salary
  };

  employees.push(newEmployee);

  res.status(201).json({
    message:"Employee created",
    employees:newEmployee
  });
  
}

//update employee
const updateEmployee=(req,res)=>{
  const id=parseInt(req.params.id);

  const employee=employees.find(emp=>emp.id===id);
  if(!employee){
    return res.status(404).json({
      message:"Employee not found"
    });
  }

  const {name,role,salary}=req.body;
  employee.name=name|| employee.name;
  employee.role=role|| employee.role;
  employee.salary=salary||employee.salary;

  res.json({
    message:"Employee updated",
    employee
  });
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

