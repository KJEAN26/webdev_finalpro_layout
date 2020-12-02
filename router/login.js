const express = require('express');
const router = express.Router();

const{
    getLoginAccnt,
    getRegisteredAccnt,
    getRegisteredAccntById,
    addAccnt,
    userDoLogin
} = require('../controllers/loginController');


router.get('/', getLoginAccnt);
router.post('/login', userDoLogin);
// router.post('/update/:id', updateLoginAccntById);
router.get('/register', getRegisteredAccnt);
router.get('/register/:id', getRegisteredAccntById);
router.post('/add', addAccnt);




module.exports = router;