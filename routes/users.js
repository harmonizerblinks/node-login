const express = require('express');
const router = express.Router();



//Login page router
router.get('users/login', (req, res) => res.render('login'));

//Login page router
router.get('/register', (req, res) => res.render('register'));

module.exports = router;