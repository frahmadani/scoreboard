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
                "scene_1_score": datum.sceneScores[0].score,
                "scene_1_time": Math.floor(datum.sceneScores[0].time),
                "scene_2_score": datum.sceneScores[1].score,
                "scene_2_time": Math.floor(datum.sceneScores[1].time),
                "scene_3_score": datum.sceneScores[2].score,
                "scene_3_time": Math.floor(datum.sceneScores[2].time),
                "scene_4_score": datum.sceneScores[3].score,
                "scene_4_time": Math.floor(datum.sceneScores[3].time),
                "scene_5_score": datum.sceneScores[4].score,
                "scene_5_time": Math.floor(datum.sceneScores[4].time)
            }
            formattedData.push(formattedDatum);
        });
        res.render('pages/session', {formattedSessionData: JSON.stringify(formattedData), sessionData: data});
    }).catch((err) => {
        console.log(err);
        res.send({ status: "error", message:"error"});
    });
}