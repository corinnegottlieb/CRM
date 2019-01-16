const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require(`./src/server/routes/api`)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/CRMDB")


app.use('/', api)

port = 5544
app.listen(port, function(){
    console.log(`Running on port ${port}`)
})