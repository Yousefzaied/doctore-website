const jwt = require("jsonwebtoken");
const User = require("../models/users.js");

const adminMiddleWare = async (req, res, next) => {
    try {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.json({ message: "No token, should be signup"}); 

    const decoded = jwt.verify(token, process.env.JWT);

    const user = await User.findById(decoded.id);
    if(!user) {
        return res.status(404).json({ message: "User not found." });
    }
    if(user.role !== 'admin') {
        return res.status(403).json({ message: "Access denied. Admins only." });
    };
    req.user = user;
    next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid token." });
    }

};

module.exports = adminMiddleWare;