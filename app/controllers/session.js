const Session = require('../models/Session');

// APP ROOT
exports.getRoot = (req, res) => {
    res.status(200).send({ message: "OK", status: "success"});
}

// RETRIEVE all session data with formatted raw
exports.findAll = (req, res) => {
    Session.find({}).select('-_id')
    .then((data) => {
        let formattedData = [];
        data.forEach(datum => {
            // Simplify session data into single dimension, round down the time to 1 sec
            let formattedDatum = {
                "username": datum.username,
                "date": datum.date,
                "score": datum.totalScore,
                "time": Math.floor(datum.totalTime),
                "scene_1_score": datum.scene1Score.score,
                "scene_1_time": Math.floor(datum.scene1Score.time),
                "scene_2_score": datum.scene2Score.score,
                "scene_2_time": Math.floor(datum.scene2Score.time),
                "scene_3_score": datum.scene3Score.score,
                "scene_3_time": Math.floor(datum.scene3Score.time),
                "scene_4_score": datum.scene4Score.score,
                "scene_4_time": Math.floor(datum.scene4Score.time),
                "scene_5_score": datum.scene5Score.score,
                "scene_5_time": Math.floor(datum.scene5Score.time)
            }
            formattedData.push(formattedDatum);
        });
        res.render('pages/session', {formattedSessionData: JSON.stringify(formattedData), sessionData: data});
    }).catch((err) => {
        console.log(err);
        res.render('pages/session', {formattedSessionData: JSON.stringify(formattedData), sessionData: data});
    });
}