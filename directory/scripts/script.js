const data = require(`../../src/data.json`)
const Client = require(`../../server/models/Client`)

const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_mk5rfpsk:65s0ii45d2tt7l66rm4aqdqobe@ds331735.mlab.com:31735/heroku_mk5rfpsk')

data.forEach(d=> {
    let client = new Client(d)
    client.save()
})

console.log(`updated clients`)