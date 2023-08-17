function isLoggedin (req, res, next) {
    req.user ? next() : res.sendStatus(401)
}

module.exports = isLoggedin