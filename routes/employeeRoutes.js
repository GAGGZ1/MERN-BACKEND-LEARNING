const express = require("express");

const {
  getEmployees,
  getEmployeeById,
  createEmployees,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");

const authMiddleware=require("../middleware/authMiddleware");
const authorizeRoles=require("../middleware/roleMiddleware")

const {body}=require("express-validator");
const validate = require("../middleware/validate");

const router = express.Router();

router.get("/",authMiddleware, getEmployees); // now only authenticated users can access employees

router.get("/:id", getEmployeeById);

router.post("/", [
  body("name").notEmpty().withMessage("Name is required"),
  body("role").notEmpty().withMessage("Role is required"),
  body("salary").isNumeric().withMessage("Salary must be number")
],validate,createEmployees);

router.put("/:id", updateEmployee);

router.delete("/:id",authMiddleware,authorizeRoles("admin"), deleteEmployee);

module.exports = router;