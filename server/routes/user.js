const express = require("express");
const router = express.Router();
const usercontroller= require('../controller/userController')

router.post("/signup", usercontroller.usersignup);
router.post("/login",usercontroller.userlogin)

module.exports = router;