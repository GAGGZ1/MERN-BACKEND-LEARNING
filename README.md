# MERN-BACKEND-LEARNING

A backend learning project built using MERN stack backend technologies to understand and implement real-world backend development concepts, authentication systems, middleware architecture, and scalable API design patterns.

---

## Features Implemented

### 1. Employee Management REST API

Designed and developed a complete RESTful API for an Employee Management System with CRUD operations.

### 2. MongoDB Integration

Integrated MongoDB using MongoDB and Mongoose for database modeling and data management.

### 3. JWT Authentication

Implemented JWT-based authentication using access tokens for secure API access.

### 4. Refresh Token Authentication

Implemented refresh token mechanism for secure session management and automatic token renewal.

### 5. Role-Based Access Control (RBAC)

Added authorization system with multiple user roles such as:

* Admin
* Manager
* Employee

### 6. Password Hashing

Implemented secure password hashing using bcrypt and Mongoose pre-save middleware.

### 7. Service Layer Architecture

Separated business logic into service layer for cleaner and scalable backend architecture.

### 8. Input Validation

Implemented request validation using middleware and `express-validator`.

### 9. Pagination

Added offset-based pagination for efficiently handling large datasets.

### 10. Middleware Architecture

Implemented custom middleware including:

* Logger Middleware
* Authentication Middleware
* Authorization Middleware
* Validation Middleware
* Error Handling Middleware

### 11. Centralized Error Handling

Implemented centralized global error middleware for consistent API error responses.

### 12. Async/Await Based Asynchronous Handling

Used modern asynchronous programming patterns with `async/await` for database operations and API handling.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Express Validator
* CORS
* dotenv

---

## API Features

1. User Registration
2. User Login
3. JWT Authentication
4. Refresh Token System
5. Role-Based Authorization
6. Create Employee
7. Get All Employees
8. Get Employee By ID
9. Update Employee
10. Delete Employee
11. Pagination Support
12. Request Validation
13. Protected Routes
14. Centralized Error Handling

---

## Learning Outcomes

Through this project, I learned:

1. REST API design principles
2. Express middleware architecture
3. MongoDB and Mongoose operations
4. JWT Authentication & Authorization
5. Refresh Token Authentication Flow
6. Password Hashing & Security
7. Service Layer Architecture
8. RBAC (Role-Based Access Control)
9. Validation and error handling
10. Pagination implementation
11. Async/Await and Promise handling
12. Backend project structuring and scalability

---

## Future Improvements

1. Search and Filtering APIs
2. Sorting APIs
3. Rate Limiting
4. Redis Integration
5. Docker Deployment
6. Unit & Integration Testing
7. Device Management
8. Refresh Token Rotation
9. Email Verification
10. Forgot Password Functionality

---

## Run Locally

Clone the repository:

```bash id="1y08vf"
git clone <your-repo-url>
```

Install dependencies:

```bash id="75pr7o"
npm install
```

Create a `.env` file:

```env id="ev6w7f"
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
PORT=3001
```

Start the development server:

```bash id="jlwm42"
npm run dev
```

Server runs on:

```text id="jlwmj7"
http://localhost:3001
```
