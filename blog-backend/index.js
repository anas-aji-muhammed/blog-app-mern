require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

var cookieParser = require('cookie-parser')
const authRoute = require('./routes/authRoutes');


const app = express()
const port = 4000
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json())


mongoose.connect('mongodb+srv://anasajeeb2:BRhavbu8ksw7nqaz@cluster0.os8p674.mongodb.net/?retryWrites=true&w=majority').then((response)=>console.log("successfully connectted to db"))

app.use('/', authRoute);


app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})


///mongo pass - BRhavbu8ksw7nqaz
/// user- anasajeeb2
// mongodb+srv://anasajeeb2:<password>@cluster0.os8p674.mongodb.net/?retryWrites=true&w=majority