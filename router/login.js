const express = require('express');
const router = express.Router();

const{
    getLoginAccnt,
    getRegisteredAccnt,
    getRegisteredAccntById,
    addAccnt,
    userDoLogin,
    getExtrapage,
<<<<<<< HEAD
    getHomepage,
=======
>>>>>>> f16b0d390ddfcb4e958e039d73663e3dfe54f2b2
} = require('../controllers/loginController');


router.get('/', getLoginAccnt);
router.post('/login', userDoLogin);
<<<<<<< HEAD
=======
 
>>>>>>> f16b0d390ddfcb4e958e039d73663e3dfe54f2b2
// router.post('/update/:id', updateLoginAccntById);getloginpage
router.get('/register', getRegisteredAccnt);
router.get('/register/:id', getRegisteredAccntById);
router.post('/add', addAccnt);
router.get('/extra', getExtrapage);
<<<<<<< HEAD
router.get('/home', getHomepage);
=======
>>>>>>> f16b0d390ddfcb4e958e039d73663e3dfe54f2b2




module.exports = router;