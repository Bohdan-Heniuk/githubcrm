const express = require('express')
const reposRouter = express.Router()
const reposController = require('../controller/reposController')
const checkIfAuth = require('../middleware/authMiddleware')

reposRouter.use(checkIfAuth)
reposRouter.post('/repos', reposController.add)
reposRouter.get('/repos', reposController.get)
reposRouter.delete('/repos/:id', reposController.delete)
reposRouter.patch('/repos/:id', reposController.update)

module.exports = reposRouter