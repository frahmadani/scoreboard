const Session = require('../models/Session');

// CREATE a session data
exports.create = (req, res) => {
    let newSession = new Session({
        sessionId: req.body.sessionId,
        username: req.body.username,
        date: req.body.date,
        totalScore: req.body.totalScore,
        totalTime: req.body.totalTime,
        sceneScores: req.body.sceneScores
    });
    newSession.save()
    .then((session) => {
        res.status(201).json({ success: true });
    }).catch((err) => {
        res.status(500).json({ success: false, error: err })
    });
}

// RETRIEVE all session data
exports.findAll = (req, res) => {
    Session.find({})
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

// RETRIEVE one session data
exports.findOne = (req, res) => {
    Session.findOne({ _id: req.params.session_id })
    .then((data) => {
        res.send
    }).catch((err) => {
        
    });
}

// DELETE one session data
exports.delete = (req, res) => {
    Session.findOneAndDelete({ _id: req.params.session_id })
    .then((data) => {
        console.log(data);
        res.send({ success: true });
    }).catch((err) => {
        console.log(err);
        res.send({ success: false, errorr: err });
    });
}