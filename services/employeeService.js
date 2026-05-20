const Employee = require("../models/Employee");

// Get all employees
const getEmployees = async (page, limit) => {

  const skip = (page - 1) * limit;

  const [employees, totalEmployees] = await Promise.all([
    Employee.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),

    Employee.countDocuments()
  ]);

  return { employees, totalEmployees };
};

// Get employee by ID
const getEmployeeById = async (id) => {

  const employee = await Employee.findById(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

// Create employee
const createEmployee = async (data) => {

  const employee = await Employee.create(data);

  return employee;
};

// Update employee
const updateEmployee = async (id, data) => {

  const employee = await Employee.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true
    }
  );

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

// Delete employee
const deleteEmployee = async (id) => {

  const employee = await Employee.findByIdAndDelete(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

// Export services
module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};