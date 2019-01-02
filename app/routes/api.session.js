const   express = require('express'),
        router = express.Router();

const   sessions = require('../controllers/api.session');

// CREATE a new session record
router.post('/sessions', sessions.create);

// RETRIEVE all session data
router.get('/sessions', sessions.findAll);

// RETRIEVE one session data
router.get('/sessions/:session_id', sessions.findOne);

// DELETE one session data
router.delete('/sessions/:session_id', sessions.delete);

module.exports = router;