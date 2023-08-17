const router = require('express').Router()
const passport = require('passport')
const {registerFunc} = require('../services/registrationFunctions')
require('../services/googleAuthSetup')
const isLoggedin = require('../middleWares/checkLogin')

router.get('/login', registerFunc)

router.get('/auth/google', passport.authenticate('google', {scope: ['email', 'profile']}))

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
}))

router.get('/auth/failure', (req, res) => {
    res.send('something went wrong')
})

router.get('/protected', isLoggedin, (req, res) => {
    res.send('protected')
})

router.get('/logout', async (req, res) => {
    req.session.destroy()
    res.redirect('/login')
})

module.exports = router