const directController = require('../controllers/directController');
const express = require('express');
const router = express.Router();


router.get('/home', (req, res)=>{
    res.send("ni gana!");
})
router.get('/',directController.gotoHome)

module.exports = router;

