/**
 * Created by prodb on 14.05.2017.
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('UserTest', UserSchema);