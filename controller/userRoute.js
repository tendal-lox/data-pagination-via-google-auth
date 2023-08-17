const router = require('express').Router()
const {dataRecieverFunc} = require('../services/userRouteFunc')

router.get('/user/listOfMembers', dataRecieverFunc)

module.exports = router