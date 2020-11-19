const directController =require('../controllers/directController')
const express = require('express');
const router = express.Router();

router.get('/index',directController.goToHome)

module.exports=router;