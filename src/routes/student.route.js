const express = require("express");

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const router = express.Router();

/*
 Student Routes
 Handles all student-related API routes
*/

// Create student
router.post("/create", authMiddleware, authorizeRoles("admin"), createStudent);

// Get all students
router.get("/", authMiddleware, getStudents);

// Get single student
router.get("/:id", authMiddleware, getStudentById);

// Update student
router.put("/:id", authMiddleware, authorizeRoles("admin"), updateStudent);

// Delete student
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteStudent);

module.exports = router;
