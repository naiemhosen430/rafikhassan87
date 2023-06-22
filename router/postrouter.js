const express = require('express')
const { loginpostcontroler, postcontroler, portfoliocontroler, editsitecontroler, plancontroler, sendmessagecoltroler, editherobanneronecontroler, editherobanneronecontrolerone, editherobanneronecontrolertwo } = require('../controlers/postcontroler')
const upload = require('../controlers/upload/photo')
const { cheaklogin } = require('../controlers/jwtvalidation')
const postroutrer = express.Router()


postroutrer.post('/login', loginpostcontroler)





// extra
postroutrer.post('/post', cheaklogin, upload.single('postimage'), postcontroler)
postroutrer.post('/portfolio', cheaklogin, upload.single('portimage'), portfoliocontroler)
postroutrer.post('/editsite', cheaklogin, editsitecontroler)
postroutrer.post('/plan/:planid', cheaklogin, plancontroler)
postroutrer.post('/sendmessage', sendmessagecoltroler)

//editt photos
postroutrer.post('/editherobannerone', cheaklogin, upload.single('heroone'), editherobanneronecontroler)
postroutrer.post('/editherobannertwo', cheaklogin, upload.single('herotwo'), editherobanneronecontrolerone)
postroutrer.post('/editherobannerthree', cheaklogin, upload.single('heroothree'), editherobanneronecontrolertwo)






module.exports= postroutrer