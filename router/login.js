const express = require('express');
const router = express.Router();

const{
    getLoginAccnt,
    getRegisteredAccnt,
    getRegisteredAccntById,
    addAccnt,
<<<<<<< HEAD
    userDoLogin,
    getExtrapage,
    getHomepage,
=======
    userDoLogin
    // updateLoginAccntById,

>>>>>>> b203e8f0da1f8d82b90bd3a764e68c6221ceff8e
} = require('../controllers/loginController');


router.get('/', getLoginAccnt);
router.post('/login', userDoLogin);
<<<<<<< HEAD
 
// router.post('/update/:id', updateLoginAccntById);getloginpage
router.get('/register', getRegisteredAccnt);
router.get('/register/:id', getRegisteredAccntById);
router.post('/add', addAccnt);
router.get('/extra', getExtrapage);
router.get('/home', getHomepage);
=======
router.get('/register', getRegisteredAccnt);
router.get('/register/:id', getRegisteredAccntById);
router.post('/add', addAccnt);
// router.post('/update/:id', updateLoginAccntById);
>>>>>>> b203e8f0da1f8d82b90bd3a764e68c6221ceff8e




module.exports = router;