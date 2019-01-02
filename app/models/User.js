const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    sessions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session'
    }
});

module.exports = mongoose.model('User', UserSchema);