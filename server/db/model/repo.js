const db = require('../db')

class Repo {
    async findOne (id) {
        return db('repos').where('id', id).select('*').first()
    }

    async get() {
        return db('repos').select('*')
    }

    async post(repo) {
        return db('repos').insert(repo)
    }

    async delete(id) {
        return db('repos').where('id', id).del()
    }

    async update(repo) {
        return db('repos').where('id', repo.id).update(repo)
    }
}

module.exports = new Repo()