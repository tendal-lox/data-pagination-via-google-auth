const mongoose = require('mongoose')

const dataModel = new mongoose.Schema({
    userId: {
        type: Number,
        requiered: true
    },
    id: {
        type: Number,
        requiered: true
    },
    title: {
        type: String,
        requiered: true
    },
    body: {
        type: String,
        requiered: true
    },
})

module.exports = mongoose.model('membersLists', dataModel)