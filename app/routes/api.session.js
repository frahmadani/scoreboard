const   express = require('express'),
        router = express.Router();

const   sessions = require('../controllers/api.session');

// CREATE a new session record
router.put('/sessions', sessions.create);

// RETRIEVE all session data
router.get('/sessions', sessions.findAll);

// RETRIEVE one session data
router.get('/sessions/:session_id', sessions.findOne);

// UPDATE one session data
router.put('/sessions/:session_id', sessions.update);

// DELETE one session data
router.delete('/sessions/:session_id', sessions.delete);

module.exports = router;