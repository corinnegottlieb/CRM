const express = require(`express`)
const router = express.Router()


const Client = require(`../models/Client`)


router.get('/clients', function(req, res){
    Client.find({}).exec(function(err, clients){
        // let data = func(clients) // change my data
        res.send(clients) //send changed data
    })
})

router.post('/client', function(req, res){
    let client = new Client(req.body)
    client.save()
    res.send(client)
})
// const func = (data) => {
// //data filter n stuff
// return data
// }

// {
//     topEmployyes:{
//         [{}]
//     },
//     salesBy
// }

router.put('/client/:id', async function(req, res){
  let client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(client)
})

module.exports = router