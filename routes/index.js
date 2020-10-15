const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => res.send('welcome'));
router.get('/', (req, res)=> res.render('welcome'))

module.exports = router;