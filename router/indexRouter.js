const directController = require('../controllers/directController');
const express = require('express');
const router = express.Router();


router.get('/home', directController.gotoHome);
router.get('/recipes/:category', directController.gotoCategory);
router.get('/features', directController.gotoFeatures);
router.get('/about', directController.gotoAbout);
router.get('/create/recipes',directController.createForm)
router.get('/recipes/:category/:id',directController.show)
router.post('/recipes/create',directController.store)
router.get('/update/recipes',directController.updateRecipe)
router.get('/extra',directController.gotoExtra)
router.get('/table',directController.gotoTable)
router.get('/inventory',directController.gotoInventory)
module.exports = router;

