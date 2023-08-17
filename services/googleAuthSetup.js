const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config()
const {insertRecord} = require('./dataBase')

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
    },
    async function(request, accessToken, refreshToken, profile, done) {
        await insertRecord(profile.id, profile.displayName, profile.email)
        return done(null, profile)
    }
))

passport.serializeUser(function(user, cb) {
    cb(null, user)
})
  
passport.deserializeUser(function(user, cb) {
    cb(null, user)
})