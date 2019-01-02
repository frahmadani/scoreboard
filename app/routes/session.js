const   express = require('express'),
        router = express.Router();

const   sessions = require('../controllers/session');

// SESSION INDEX page
router.get('/index', sessions.findAll);

module.exports = router;