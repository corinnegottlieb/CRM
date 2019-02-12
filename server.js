const express = require('express')
const bodyParser = require('body-parser')
const api = require(`./server/routes/api`)
const app = express()
const path = require(`path`)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'node_modules')));
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

//     next()
// })

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/CRMDB")


app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

PORT = 5544
app.listen(process.env.PORT || PORT, function(){
    console.log(`Running on port ${PORT}`)
})