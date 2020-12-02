const directController = require('../controllers/directController');
const authorization = require("./../middleware/authorization");
const express = require('express');
const router = express.Router();


router.get('/home',authorization, directController.gotoHome);
router.get('/recipes/:category',authorization, directController.gotoCategory);
// router.get('/features', directController.gotoFeatures);
router.get('/about', directController.gotoAbout);
router.get('/create/recipes',directController.createForm)
router.get('/recipes/:category/:id',directController.show)
router.post('/recipes/create',directController.store)
router.post('/update/:id',directController.recipeUpdate)
router.get('/update/recipes/:id',directController.updateRecipe)
router.get('/extra', authorization ,directController.gotoExtra)
router.get('/table',directController.gotoTable)
router.get('/inventory',directController.gotoInventory)
router.post('/delete/:id',directController.deleteRecipe)    
router.get('/get/all/recipe', directController.getAllRecipe)
module.exports = router;
