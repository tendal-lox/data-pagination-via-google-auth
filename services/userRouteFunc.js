const axios = require('axios')
const {insertRecordMembers} = require('./dataBase')

exports.dataRecieverFunc = async (req, res) => {
    const recievedData = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
    recievedData.data.forEach(async e => {
        await insertRecordMembers(e.userId, e.id, e.title, e.body)
    })
    res.send('Data saved to the dataBase')
}