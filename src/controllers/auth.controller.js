const authService = require("../services/auth.service");

/*
|--------------------------------------------------------------------------
| Cookie Configuration
|--------------------------------------------------------------------------
*/

const cookieOptions = {
  httpOnly: true,
  secure: false,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

/*
|--------------------------------------------------------------------------
| Register User
|--------------------------------------------------------------------------
*/

async function registerUser(req, res) {
  try {
    const data = await authService.registerUser(req.body);

    // Set JWT token in cookie
    res.cookie("token", data.token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: data.user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/*
|--------------------------------------------------------------------------
| Login User
|--------------------------------------------------------------------------
*/

async function loginUser(req, res) {
  try {
    const data = await authService.loginUser(req.body);

    // Set JWT token in cookie
    res.cookie("token", data.token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: data.user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/*
|--------------------------------------------------------------------------
| Get Logged In User Profile
|--------------------------------------------------------------------------
*/

async function getProfile(req, res) {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
}

/*
|--------------------------------------------------------------------------
| Logout User
|--------------------------------------------------------------------------
*/

async function logoutUser(req, res) {
  // Clear JWT cookie
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
};
