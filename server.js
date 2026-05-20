const express = require("express");
const dotenv = require("dotenv");

const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");

const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(loggerMiddleware);

// Routes
app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);

// Error middleware should be last
app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});