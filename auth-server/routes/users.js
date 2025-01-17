const express = require('express');
const { signUp, signin, findAllUsers, searchUsers } = require('../controllers/users');
const router = express.Router();
const auth = require('../middleware/auth')

router.post('/signup', signUp)
router.post('/signin', signin)
router.get('/', auth, findAllUsers)
router.get('/search', searchUsers);


module.exports = router;