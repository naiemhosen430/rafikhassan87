const mongoose = require('mongoose')

const planchema = new mongoose.Schema({
    planeonetittle: {
        type: String
    },
    planeoneprice: {
        type: String
    },
    planeonedes: {
        type: String
    }
})

const planmodel = new mongoose.model('plan', planchema)
module.exports= planmodel