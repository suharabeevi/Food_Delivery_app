const express = require("express");
const router = express.Router();
const AdminController = require('../controller/AdminController')

router.post('/addcategory',AdminController.addcategory)

module.exports = router;