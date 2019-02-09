const data = require(`../../src/data.json`)
const Client = require(`../../server/models/Client`)

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING||"mongodb://localhost/CRMDB")

data.forEach(d=> {
    let client = new Client(d)
    client.save()
})
