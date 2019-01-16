const data = require(`../../src/data.json`)
const Client = require(`../../src/server/models/Client`)

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/CRMDB")

data.forEach(d=> {
    let client = new Client(d)
    client.save()
})
