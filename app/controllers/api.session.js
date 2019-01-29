const Session = require('../models/Session');

// CREATE a session data
exports.create = (req, res) => {
    let newSession = new Session({
        sessionId: req.body.sessionId,
        username: req.body.username,
        date: req.body.date,
        totalScore: req.body.totalScore,
        totalTime: req.body.totalTime,
        scene1Score: req.body.scene1Score,
        scene2Score: req.body.scene2Score,
        scene3Score: req.body.scene3Score,
        scene4Score: req.body.scene4Score,
        scene5Score: req.body.scene5Score
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
    Session.findOne({ sessionId: req.params.session_id })
    .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
}

// UPDATE one session data
exports.update = (req, res) => {
    Session.findOne({ sessionId: req.params.session_id })
    .then((data) => {
        if (!data) {
            return res.status(404).send({ success: false, message: "Data not found" })
        }
        console.log(data);
        Object.assign(data, req.body).save((err, newData) => {
            if (err) return res.status(500).send({ success: false, message: "Internal error" })
            return res.status(200).send({ success: true, message: "Success updating content" })
        })
    }).catch((err) => {
        res.send({ success: false, message: err })
    })
}

// DELETE one session data
exports.delete = (req, res) => {
    Session.findOneAndDelete({ sessionId: req.params.session_id })
    .then((data) => {
        console.log(data);
        res.send({ success: true });
    }).catch((err) => {
        console.log(err);
        res.send({ success: false, error: err });
    });
}