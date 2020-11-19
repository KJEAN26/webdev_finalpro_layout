const express = require('express');
const router = express.Router();

const{
    getLoginAccnt,
    getLoginAccntById,
    updateLoginAccntById,
    getRegisteredAccnt,
    getRegisteredAccntById,
    addAccnt,
} = require('../controllers/loginController');

//router for login
router.get('/', getLoginAccnt);
router.post('/login', getLoginAccnt);
 
router.post('/update/:id', updateLoginAccntById);
router.get('/register', getRegisteredAccnt);
router.get('/register/:id', getRegisteredAccntById);
router.post('/add', addAccnt);




module.exports = router;