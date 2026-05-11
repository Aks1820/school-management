const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/auth.controller");

const { authMiddleware } = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

// Get logged in user profile
router.get("/profile", authMiddleware, getProfile);

// Logout user
router.post("/logout", authMiddleware, logoutUser);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Admin-only test route
router.get("/admin", authMiddleware, authorizeRoles("admin"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin",
  });
});

module.exports = router;
