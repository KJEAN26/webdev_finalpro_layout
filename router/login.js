const express = require('express');
const router = express.Router();

const{
    getLoginAccnt,
    getRegisteredAccnt,
    getRegisteredAccntById,
    addAccnt,
    userDoLogin,
    getExtrapage,
    getHomepage,
} = require('../controllers/loginController');


router.get('/', getLoginAccnt);
router.post('/login', userDoLogin);
// router.post('/update/:id', updateLoginAccntById);getloginpage
router.get('/register', getRegisteredAccnt);
router.get('/register/:id', getRegisteredAccntById);
router.post('/add', addAccnt);
router.get('/extra', getExtrapage);
router.get('/home', getHomepage);




module.exports = router;