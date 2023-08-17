const express = require('express')
const app = express()
require('dotenv').config()
require('./services/dataBase')()
const loginRouter = require('./controller/loginRoute')
const userRouter = require('./controller/userRoute')
const session = require('express-session')
const passport = require('passport')
const loginCheck = require('./middleWares/checkLogin')
const Redis = require("ioredis")
const redis = new Redis()
const redisStore = require('connect-redis').default

app.set('view engine', 'ejs')

app.use(
    session({
        secret: "this_is_a_secret",
        store: new redisStore({
            host: 'localhost',
            port: 6379,
            client: redis
        }),
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false
        }
    })
)
app.use(passport.session())
app.use(loginRouter)
app.use(loginCheck)
app.use(userRouter)

async function main() {
    try {
        const webServiceListener = await app.listen(process.env.PORT || 3000)
        console.log('web service connected')

        process.on('uncaughtException', err => {
            console.error('Somthing went wrong' ,err)
            webServiceListener.close()
        })

        process.on('unhandledRejection', err => {
            console.error('There is unhandled rejection' ,err)
            webServiceListener.close()
        })
    } catch(err) {
        console.error(err)
    }
}

main()