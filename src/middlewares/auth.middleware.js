const jwt = require("jsonwebtoken");

/*
 Authentication Middleware
 Verifies JWT token from cookies or authorization header
*/

async function authMiddleware(req, res, next) {
  // Get token from cookie or Bearer token
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}

module.exports = {
  authMiddleware,
};
