const directController = require('../controllers/directController');
const express = require('express');
const router = express.Router();


router.get('/home', (req, res)=>{
  res.render('pages/home')
})

router.get('/about', (req, res)=>{
  res.render('pages/home')
})

router.get('/',directController.gotoHome)

module.exports = router;

