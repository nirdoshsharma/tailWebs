const express = require('express')
const mongoose = require('mongoose')
const { CONFIG } = require('./config')
const { UserModel } = require('./dao/models/user.model')
const { StudentRouter } = require('./server/routes/student')
const { UserRouter } = require('./server/routes/user')
const app = express()

app.use(express.json())
app.use("/user", UserRouter)
app.use("/student", StudentRouter)

mongoose.connect(CONFIG.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected")
        app.listen(CONFIG.PORT, () => {
            console.log(`App listening on port ${CONFIG.PORT}`)
        })
    })
    .catch(err => {
        console.error("MongoDB Connection Failed")
        console.error(err)
        process.exit(0)
    })
