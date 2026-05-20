# MERN-BACKEND-LEARNING

A backend learning project built using the MERN stack backend technologies to understand and implement real-world backend development concepts and best practices.

## Features Implemented

### Employee Management REST API

Designed and developed a RESTful API for an Employee Management System with complete CRUD operations.

### MongoDB Integration

Integrated MongoDB using Mongoose for efficient database modeling and data management.

### Input Validation

Implemented request validation using middleware and `express-validator` to ensure clean and secure API requests.

### Pagination

Added offset-based pagination for efficiently handling and fetching large datasets.

### JWT Authentication

Implemented JWT (JSON Web Token) based authentication for secure access to protected routes.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Express Validator

---

## API Features

* Create Employee
* Get All Employees
* Get Employee By ID
* Update Employee
* Delete Employee
* Pagination Support
* Request Validation
* Authentication & Authorization

---

## Learning Outcomes

Through this project, I learned:

* REST API design principles
* Express middleware architecture
* MongoDB and Mongoose operations
* Authentication using JWT
* Validation and error handling
* Pagination implementation
* Backend project structuring

---

## Future Improvements

* Role-based authorization
* Refresh tokens
* Search and filtering
* Sorting APIs
* Rate limiting
* Unit and integration testing
* Docker deployment

---

## Run Locally

Clone the repository:

```bash id="4wjlwm"
git clone <your-repo-url>
```

Install dependencies:

```bash id="6jlwmx"
npm install
```

Create a `.env` file:

```env id="hjlwm1"
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash id="jlwm7o"
npm run dev
```

Server runs on:

```text id="jlwm0f"
http://localhost:3001
```
