const directController = require('../controllers/directController');
const authorization = require("./../middleware/authorization");
const express = require('express');
const router = express.Router();

router.get('/home',authorization, directController.gotoHome);
router.get('/recipes/:category',authorization, directController.gotoCategory);
router.get('/about',authorization, directController.gotoAbout);
router.get('/create/recipes',authorization,directController.createForm)
router.get('/recipes/:category/:id',authorization,directController.show)
router.post('/recipes/create',authorization,directController.store)
router.post('/update/:id',authorization,directController.recipeUpdate)
router.get('/update/recipes/:id',authorization,directController.updateRecipe)
router.get('/extra', authorization ,directController.gotoExtra)
router.get('/table',authorization, directController.gotoTable)
router.get('/inventory',authorization,directController.gotoInventory)
router.post('/delete/:id',authorization,directController.deleteRecipe)    
router.get('/get/all/recipe',authorization,directController.getAllRecipe)
module.exports = router;
    