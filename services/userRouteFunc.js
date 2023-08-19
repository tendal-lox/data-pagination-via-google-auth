const axios = require('axios')
const {insertRecordMembers, findSortedData} = require('./dataBase')

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

exports.paginatingDataFunc = async (req, res) => {
    const {page, limit} = req.query
    const result = await findSortedData(page, limit)
    console.log(result)
    res.send('Hello')
}