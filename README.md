# School Management Backend

A backend API for managing students, teachers, authentication, and attendance in a school management system.

## Features

- JWT Authentication
- Role-Based Access Control (RBAC)
- Student Management CRUD
- Teacher Management CRUD
- Attendance Management
- Attendance Percentage Calculation
- Protected Routes
- Cookie-Based Authentication
- MongoDB Relationships using Populate

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## Project Structure

```bash
src/
│
├── controllers/
├── models/
├── routes/
├── services/
├── middlewares/
├── utils/
└── db/
```

---

## Installation

Clone the repository:

```bash
git clone YOUR_REPO_LINK
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

## Run The Server

```bash
npm run dev
```

---

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- GET `/api/auth/profile`

### Students

- POST `/api/students/create`
- GET `/api/students`
- GET `/api/students/:id`
- PUT `/api/students/:id`
- DELETE `/api/students/:id`

### Teachers

- POST `/api/teachers/create`
- GET `/api/teachers`
- GET `/api/teachers/:id`
- PUT `/api/teachers/:id`
- DELETE `/api/teachers/:id`

### Attendance

- POST `/api/attendance/create`
- GET `/api/attendance`
- GET `/api/attendance/student/:studentId`
- GET `/api/attendance/percentage/:studentId`

---

## Author

Akshit Kumar
