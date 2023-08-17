const mongoose = require('mongoose')
const usersModel = require('../schema/userSchema')
const dataModel = require('../schema/dataSchema')

module.exports = async function DBSetup () {
    try {
        await mongoose.connect('mongodb://localhost:27017/test')
        console.log('DataBase connected')
    } catch(err) {
        console.error(err)
    }
}

module.exports.insertRecord = async (userId, displayName, email) => {
    if (!await usersModel.exists({userId: userId})) 
        await usersModel.create({userId: userId, displayName: displayName, email: email}).save()
    
}

module.exports.insertRecordMembers = async (userId, id, title, body) => {
    if (!await dataModel.exists({id: id}))
        await dataModel.create({userId: userId, id: id, title: title, body: body}).save()
}