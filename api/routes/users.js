const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {body, validationResult} = require("express-validator")
const User = require("../models/users.js");
const adminMiddleWare = require("../middleware/adminMiddleWare.js");
const authMiddleware = require("../middleware/authMiddleWare.js");


// registe
router.post("/register", [
    body("name").notEmpty().withMessage("The name is required"),
    body("email").isEmail().withMessage("The email is required"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters")

], 
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ status: "error", errors: errors.array() });
    }

    const {name, email, password} = req.body;

    // check user exist
    const userExist = await User.findOne({email});
    if(userExist) {
        return res.status(400).json({ message: "This email already exists" });
    }

    // hashPassword
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({name, email, password:hashPassword});
    await newUser.save();

    // create Token
    const token = jwt.sign(
        {id: newUser._id, email: newUser.email},
        process.env.JWT,
        { expiresIn: "7d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        samesite:"none"
    }).json({status: "success", message: "Register success", token})

    } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({ status: "fail", message: "Something went wrong" });
    }
});

//login 
router.post("/login",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").notEmpty().withMessage("Password is require")
] 
,async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ status: "error", errors: errors.array() });
    }
    const {email, password} = req.body;

    // check exist user
    const existUser = await User.findOne({email});
    if(!existUser) {
        return res.status(400).json({ status: "error", message: "Invalid email" });
    }

    // match password
    const isMatch = await bcrypt.compare(password, existUser.password);
    if(!isMatch) {
        return res.status(400).json({ status: "error", message: "Invalid password" });
    }

    const token = jwt.sign(
        {id: existUser._id, email: existUser.email},
        process.env.JWT,
        {expiresIn:'7d'},
    );

    const userData = {
        id: existUser._id,
        name:existUser.name,
        email:existUser.email,
        password:existUser.password,
        role:existUser.role,
    }

    res.cookie("token", token, {
        httpOnly:true,
        secure: true,
        samesite:"none"
    }).json({ status: "success", message: "Login success", token, user: userData });

    } 
    catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({ status: "fail", message: "Something went wrong" });
    }
});

// get-single-user
router.get("/me", authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ status: "success", user });
    } catch (error) {
        console.error("Error fetching user from token:", error);
        res.status(500).json({ status: "fail", message: "Something went wrong" });
    }
});


module.exports = router;
