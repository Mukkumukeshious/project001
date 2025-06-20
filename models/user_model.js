const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlenght: [5, "username must be at leat 5 character long"]

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlenght: [10, "email must be at leat 10 character long"]

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlenght: [5, "password must be at leat 5 character long"]

    }
})

const user = mongoose.model('user', userSchema);

module.exports = user;