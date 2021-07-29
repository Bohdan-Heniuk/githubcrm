const express = require('express')
const authRouter = require('./routes/authRoutes')
const reposRouter = require('./routes/reposRoutes')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/api', reposRouter)


app.listen(process.env.PORT, () => console.log(`Express running on ${process.env.PORT}`))
