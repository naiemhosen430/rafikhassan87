const mongoose = require('mongoose')

const msgschema = new mongoose.Schema({
    sendmsgname: {
        type: String
    },
    sendmsgphone: {
        type: String
    },
    sendmsgtext: {
        type: String
    }
})

const msgmodel = new mongoose.model('message', msgschema)
module.exports= msgmodel