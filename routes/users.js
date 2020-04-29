var express = require('express');
var router = express.Router();
const user = require('../Controllers/Users')

router.post('/register', user.create)
router.post('/login', user.authenticated)

module.exports = router;
