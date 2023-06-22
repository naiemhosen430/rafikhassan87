const editsitemodel = require("../model/editsite")
const fs = require("fs")
const planmodel = require("../model/plat")
const msgmodel = require("../model/sendmessage")

const home = async (req,res) => {
    try {
        const sityinfoo = await editsitemodel.find()
        const plans = await planmodel.find()
        res.render('home', {sityinfoo, plans})
    } catch (error) {
        
    }
}

const photos = async (req,res) => {
    try {
        
        const photofolder = 'public/assets/images/allimg'
        fs.readdir(photofolder, (files, error) => {
            console.log(files)
            res.render('photos', {files})
        })
    } catch (error) {
        
    }
}

const product = (req,res) => {
    res.render('product')
}

const portfolio =async (req,res) => {
    try {
            res.render('portfolio')
        } catch (error) {
        
    }
}

const about = (req,res) => {
    res.render('about')
}

const contract = (req,res) => {
    res.render('contract')
}

const dasboad = async (req,res) => {
    try {
        const sityinfo = await editsitemodel.find()
        const planss = await planmodel.find()
        const messaged = await msgmodel.find()

        res.render('dasboad', {sityinfo, planss, messaged})
    } catch (error) {
        
    }
}
const login = (req,res) => {
    res.render('login')
}

module.exports= {
    home,
    photos,
    product,
    portfolio,
    about,
    contract,
    dasboad,
    login
}