const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose');
const router = require('./router/mainrouter')
const postroutrer = require('./router/postrouter')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const memoryStore = new session.MemoryStore();
const app = express()
require('dotenv').config()
require('mongodb')



app.use(
    session({
      secret: process.env.SESSION_KEY,
      resave: false,
      saveUninitialized: false,
      store: memoryStore,
    })
  );



// console.log(process.env.MONGO_URL)

// const DB = process.env.MONGO_URL || "mongodb+srv://rafik:vpCh6pbM1tUAkrK8@cluster0.mkohbig.mongodb.net/rafikphotography?retryWrites=true&w=majority";




// mongoose.connect(DB).then(() => {
//     console.log("mongose is connected")
// }).catch((err) => {
//     console.log(err)
// });

// mongoose.set('strictQuery', true);



mongoose.connect('mongodb://127.0.0.1:27017/rhphotpy')
.then(()=>console.log("databasae is commect"))


//app set
app.set("view engine", "ejs")

//app use
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(router)
app.use(postroutrer)
app.use(cookieParser());


module.exports = app