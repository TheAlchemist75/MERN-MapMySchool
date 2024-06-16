const jwt = require("jsonwebtoken");
const config = require("config"); // You may use `config` package for configuration

// Middleware function to verify JWT token
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "Authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
