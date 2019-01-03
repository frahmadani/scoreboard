const   express = require('express'),
        router = express.Router();

const   sessions = require('../controllers/session');

// APP ROOT page
router.get('/', sessions.getRoot);

// SESSION INDEX page
router.get('/index', sessions.findAll);

module.exports = router;