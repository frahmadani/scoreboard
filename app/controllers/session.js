const Session = require('../models/Session');

// RETRIEVE all session data
exports.findAll = (req, res) => {
    Session.find({}).select('-_id')
    .then((data) => {
        res.render('pages/session', {sessionData: data})
    }).catch((err) => {
        res.redirect('/');
    });
}