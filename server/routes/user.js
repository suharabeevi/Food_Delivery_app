const express = require("express");
const router = express.Router();
const usercontroller= require('../controller/userController')
const verifyToken = require('../Middleware/auth')

router.post("/signup", usercontroller.usersignup);
router.post("/login",usercontroller.userlogin)



module.exports = router;