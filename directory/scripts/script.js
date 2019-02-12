const data = require(`../../src/data.json`)
const Client = require(`../../server/models/Client`)

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/CRMDB")

data.forEach(d=> {
    let client = new Client(d)
    client.save()
})
