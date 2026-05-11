const express = require("express");

const {
  createAttendance,
  getAttendance,
  getAttendanceByStudent,
  getAttendancePercentage,
} = require("../controllers/attendance.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const router = express.Router();

/*
 Attendance Routes
 Handles all attendance-related API routes
*/

// Create attendance
router.post(
  "/create",
  authMiddleware,
  authorizeRoles("teacher", "admin"),
  createAttendance,
);

// Get all attendance records
router.get("/", authMiddleware, getAttendance);

// Get attendance by student
router.get("/student/:studentId", authMiddleware, getAttendanceByStudent);

// Get attendance percentage
router.get("/percentage/:studentId", authMiddleware, getAttendancePercentage);

module.exports = router;
