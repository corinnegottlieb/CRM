const express = require(`express`)
const router = express.Router()


const Client = require(`../models/Client`)


router.get('/clients', async function(req, res){
    let clients = await Client.find({})
        res.send(clients) 
})

router.post('/client', function(req, res){
    let client = new Client(req.body)
    client.save()
    res.send(client)
})

router.put('/client/:id', async function(req, res){
  let client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(client)
})

module.exports = router