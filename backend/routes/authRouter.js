const express = require("express");
const User = require("../models/user.js");

const authRouter = express.Router();

authRouter.post("/signup", async(req,res) =>{
    const {fname,lname,email,password}= req.body;
    const user = await new User({fname,lname,email,password});
    await user.save();
    res.send("Signup successfull.");
});

authRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.find({email,password});
    res.send(user);
});

module.exports = authRouter;