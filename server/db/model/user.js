const db = require('../db')

class User {
    async findOne (condition) {
        return db('users').where(condition).first()
    }


    async register (user) {
        return db('users').insert(user)
    }
}

module.exports = new User()