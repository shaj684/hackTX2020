const express = require('express');
const router = express.Router();
const genPassword = require('../lib/passwordUtils').genPassword;
const connection = require('../config/database');
const Account = connection.models.Account;
const passport = require('passport');
const indexController = require('../controllers/indexController');
const { index } = require('../models/account');

// login
router.post('/login', passport.authenticate('local'), indexController.account_login_post);
router.get('/login', passport.authenticate('local'), indexController.account_login_get);

// register route
router.post('/register', indexController.account_register_post);
router.get('/register', indexController.account_register_get);

// matchMaking
router.get('/matchMaking', indexController.match_get);

module.exports = router;
