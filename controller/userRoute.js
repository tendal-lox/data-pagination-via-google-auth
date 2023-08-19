const router = require('express').Router()
const {dataRecieverFunc, paginatingDataFunc} = require('../services/userRouteFunc')

router.get('/user/listOfMembers', dataRecieverFunc)

router.get('/user/data', paginatingDataFunc)

module.exports = router