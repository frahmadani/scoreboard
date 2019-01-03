const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    sessionId: String,
    username: String,
    date: String,
    totalScore: Number,
    totalTime: Number,
    scene1Scores: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    scene2Scores: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    scene3Scores: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    scene4Score: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    scene5Scores: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    dateUploaded: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Session', SessionSchema);