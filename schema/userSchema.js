const mongoose = require('mongoose')

const myModel = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('siteMembers', myModel)