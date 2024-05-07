const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    tokenId: {
        type: Number,
        required: true
    },
    powerGenerated: {
        type: Number,
        required: true
    },
    powerConsumed: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);