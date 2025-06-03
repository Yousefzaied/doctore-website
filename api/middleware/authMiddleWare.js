
const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, should be signup" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT);
    req.user = {
      id: decoded.id,
    };

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleWare;
