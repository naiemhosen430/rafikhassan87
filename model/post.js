const mongoose = require('mongoose')

const postschema = new mongoose.Schema({
    postcontent: {
        type: String
    },
    picture: {
        type: String
    }
})

const postmodel = new mongoose.model('post', postschema)
module.exports= postmodel