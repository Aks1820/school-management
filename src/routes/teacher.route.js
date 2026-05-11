const express = require("express");

const {
  createTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacher.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const router = express.Router();

/*
 Teacher Routes
 Handles all teacher-related API routes
*/

// Create teacher
router.post("/create", authMiddleware, authorizeRoles("admin"), createTeacher);

// Get all teachers
router.get("/", authMiddleware, getTeachers);

// Get single teacher
router.get("/:id", authMiddleware, getTeacherById);

// Update teacher
router.put("/:id", authMiddleware, authorizeRoles("admin"), updateTeacher);

// Delete teacher
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteTeacher);

module.exports = router;
