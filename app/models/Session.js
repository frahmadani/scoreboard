const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    sessionId: String,
    username: String,
    date: String,
    totalScore: Number,
    totalTime: Number,
    sceneScores: [{
        quizId: Number,
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    }],
    dateUploaded: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Session', SessionSchema);