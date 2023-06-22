const mongoose = require('mongoose')

const myschema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
})

const mymodel = new mongoose.model('myinfo', myschema)
module.exports= mymodel