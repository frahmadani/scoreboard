const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    sessionId: String,
    username: String,
    date: String,
    totalScore: Number,
    totalTime: Number,
    scene1Score: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    scene2Score: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    scene3Score: {
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
    scene5Score: {
        time: Number,
        score: Number,
        maxScore: Number,
        userAnswers: [Number],
        userDecisions: [Number]
    },
    dateUploaded: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Session', SessionSchema);