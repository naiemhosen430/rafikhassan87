const mongoose = require('mongoose')

const editsiteschema = new mongoose.Schema({
    heroheader: {
        type: String
    },
    herodes: {
        type: String
    },
    herondheader: {
        type: String
    },
    aboutsite: {
        type: String
    },
    portfoliodes: {
        type: String
    },
    heroone: {
        type: String
    },
    herotwo: {
        type: String
    },
    herothree: {
        type: String
    },
    createnewprojectdes: {
        type: String
    }
})

const editsitemodel = new mongoose.model('siteinfo', editsiteschema)
module.exports= editsitemodel