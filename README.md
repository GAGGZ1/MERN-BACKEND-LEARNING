# MERN-BACKEND-LEARNING

A backend learning project built using the MERN stack backend technologies to understand and implement real-world backend development concepts and best practices.

## Features Implemented

### 1. Employee Management REST API

Designed and developed a RESTful API for an Employee Management System with complete CRUD operations.

### 2. MongoDB Integration

Integrated MongoDB using Mongoose for efficient database modeling and data management.

### 3. Input Validation

Implemented request validation using middleware and `express-validator` to ensure clean and secure API requests.

### 4. Pagination

Added offset-based pagination for efficiently handling and fetching large datasets.

### 5. JWT Authentication

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

1. Create Employee
2. Get All Employees
3. Get Employee By ID
4. Update Employee
5. Delete Employee
6. Pagination Support
7. Request Validation
8. Authentication & Authorization

---

## Learning Outcomes

Through this project, I learned:

1. REST API design principles
2. Express middleware architecture
3. MongoDB and Mongoose operations
4. Authentication using JWT
5. Validation and error handling
6. Pagination implementation
7. Backend project structuring

---

## Future Improvements

1. Role-based authorization
2. Refresh tokens
3. Search and filtering
4. Sorting APIs
5. Rate limiting
6. Unit and integration testing
7. Docker deployment

---

## Run Locally

Clone the repository:

```bash id="84r6tx"
git clone <your-repo-url>
```

Install dependencies:

```bash id="xq83a1"
npm install
```

Create a `.env` file:

```env id="uh9rxt"
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash id="0b4n7s"
npm run dev
```

Server runs on:

```text id="h6w0rk"
http://localhost:3001
```
