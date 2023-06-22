const mongoose = require('mongoose')

const portfolioschema = new mongoose.Schema({
    portfoliocontent: {
        type: String
    },
    pictureport: {
        type: String
    }
})

const portfoliomodel = new mongoose.model('portfolio', portfolioschema)
module.exports= portfoliomodel