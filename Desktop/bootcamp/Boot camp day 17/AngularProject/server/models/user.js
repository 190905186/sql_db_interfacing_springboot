const mo = require('mongoose')

const schema = mo.Schema()
const userSchema = new mo.Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mo.model('User', userSchema, 'users')