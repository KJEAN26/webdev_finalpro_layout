const directController = require('../controllers/directController');
const express = require('express');
const router = express.Router();


// router.get('/home', (req, res)=>{
//   res.render('pages/home')
// })
router.get('/home',directController.gotoHome)

module.exports = router;

