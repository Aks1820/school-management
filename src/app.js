const express = require("express");
const cookieParser = require("cookie-parser");

// Route Imports
const authRoutes = require("./routes/auth.route");
const studentRoutes = require("./routes/student.route");
const teacherRoutes = require("./routes/teacher.route");
const attendanceRoutes = require("./routes/attendance.route");

const app = express();

/*
|--------------------------------------------------------------------------
| Global Middlewares
|--------------------------------------------------------------------------
*/

// Parse incoming JSON requests
app.use(express.json());

// Parse cookies from client requests
app.use(cookieParser());

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);

app.use("/api/teachers", teacherRoutes);

app.use("/api/attendance", attendanceRoutes);

/*
|--------------------------------------------------------------------------
| Health Check Route
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "School Management API is running",
  });
});

/*
|--------------------------------------------------------------------------
| 404 Route Handler
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;
