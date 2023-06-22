const editsitemodel = require("../model/editsite")
const mymodel = require("../model/mymodel")
const planmodel = require("../model/plat")
const portfoliomodel = require("../model/portfolio")
const postmodel = require("../model/post")
const msgmodel = require("../model/sendmessage")
const jwt = require('jsonwebtoken');
require('dotenv').config()


const loginpostcontroler = async (req,res) => {
    try {
        const {email, password} = req.body
        const validemail = await mymodel.findOne({email: email})
        if (validemail.password == password) {
            const userobject= {
                id: validemail._id
            }
            const token = jwt.sign(userobject, process.env.JWT_SECRET, {
                expiresIn: '10000h'
              });
              
              res.cookie(process.env.COOKI_NAME, token, {
                maxAge: 8640000000,
                httpOnly: true
              });
            console.log(req.cookies)
            res.redirect('/dasboad')
        } else {
            res.send('not match')
        }

        res.send('done')
    } catch (error) {
        
    }
}

const postcontroler = async (req,res) => {
    try {
        const postcontent = req.body.content
        const picture = req.file.filename
        console.log(picture)
        const newpost = await new postmodel({
            postcontent,
            picture
        })
        await newpost.save()
        res.redirect('/dasboad')
    } catch (error) {
        
    }
}


const portfoliocontroler = async (req,res) => {
    try {
        const portfoliocontent = req.body.portfoliocontent
        const pictureport = req.file.filename
        const newportfolio = await new portfoliomodel({
            portfoliocontent,
            pictureport
        })
        await newportfolio.save()
        res.redirect('/dasboad')
    } catch (error) {
        
    }
}


const editsitecontroler = async (req,res) => {
    try {        
        const {heroheader, herodes, herondheader, aboutsite, portfoliodes, createnewprojectdes} = req.body
        await editsitemodel.updateOne({
            $set: {
                heroheader,
                herodes,
                herondheader,
                aboutsite,
                portfoliodes,
                createnewprojectdes
            }
        })
        res.redirect('/dasboad')
    } catch (error) {        
    }
}



const plancontroler = async (req,res) => {
    try {        
        const planeonetittle = req.body.planeonetittle
        const planeoneprice = req.body.planeoneprice
        const planeonedes = req.body.planeonedes
        const planid = req.params.planid
        await planmodel.updateOne({_id: planid},{
            $set: {
                planeonetittle,
                planeoneprice,
                planeonedes
            }
        })

        res.redirect('/dasboad')
    } catch (error) {        
    }
}


const sendmessagecoltroler = async (req,res) => {
    try {
        const {sendmsgname, sendmsgphone, sendmsgtext} = req.body
        const newmessage = await new msgmodel({
            sendmsgname,
            sendmsgphone,
            sendmsgtext
        })
        await newmessage.save()
        res.render('thanks', {newmessage})
    } catch (error) {
        
    }
}


const editherobanneronecontroler = async (req,res) => {
    try {
        const heroone = req.file.filename
        await editsitemodel.updateOne({
            $set: {
                heroone
            }
        })
        res.redirect('/dasboad')
    } catch (error) {
        
    }
}


const editherobanneronecontrolerone = async (req,res) => {
    try {
        const herotwo = req.file.filename
        await editsitemodel.updateOne({
            $set: {
                herotwo
            }
        })
        res.redirect('/dasboad')
    } catch (error) {
        
    }
}

const editherobanneronecontrolertwo = async (req,res) => {
    try {
        const herothree = req.file.filename
        await editsitemodel.updateOne({
            $set: {
                herothree
            }
        })
        res.redirect('/dasboad')
    } catch (error) {
        
    }
}




module.exports= {
    editherobanneronecontrolerone,
    editherobanneronecontrolertwo,
    loginpostcontroler,
    postcontroler,
    portfoliocontroler,
    editsitecontroler,
    plancontroler,
    sendmessagecoltroler,
    editherobanneronecontroler
}