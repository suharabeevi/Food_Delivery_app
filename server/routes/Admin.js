const express = require("express");
const router = express.Router();
const AdminController = require('../controller/AdminController')

router.post('/addcategory',AdminController.addcategory)
router.get('/getAllCategory',AdminController.GetAllcategoty)

module.exports = router;

