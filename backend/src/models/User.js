const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String, // remember to hash passwords in a real-world application
});

module.exports = mongoose.model('User', UserSchema);
