const express = require('express')
const {
    home, 
    photos, 
    product,
    portfolio,
    about,
    contract,
    dasboad,
    login
} = require('../controlers/maincontroler')
const { cheaklogin } = require('../controlers/jwtvalidation')
const router = express.Router()


router.get('/login', login)

router.get('/', home)
router.get('/photos', photos)
router.get('/product', product)
router.get('/portfolio', portfolio)
router.get('/about', about)
router.get('/contract', contract)
router.get('/dasboad', cheaklogin, dasboad)

module.exports= router