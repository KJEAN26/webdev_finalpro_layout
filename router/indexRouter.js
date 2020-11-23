const directController = require('../controllers/indexController');
const express = require('express');
const router = express.Router();


router.get('/home', directController.gotoHome);
router.get('/appetizers', directController.gotoAppetizers);
router.get('/main_course', directController.gotoMain);
router.get('/desserts', directController.gotoDesserts);
router.get('/features', directController.gotoFeatures);
router.get('/about', directController.gotoAbout);

module.exports = router;

