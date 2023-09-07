require('dotenv').config();
const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoutes');
const blogsRouteRoute = require('./routes/blogRoutes');
const {mongoDBConnection} = require('./utils/db_init');



const app = express()
const port = 4000
app.use(cookieParser())
app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json())

mongoDBConnection();

app.use('/', authRoute);
app.use('/', blogsRouteRoute);



app.listen(process.env.PORT || port, () => {
  console.log(`Blog app listening on port ${port}`)
})


///mongo pass - BRhavbu8ksw7nqaz
/// user- anasajeeb2
// mongodb+srv://anasajeeb2:<password>@cluster0.os8p674.mongodb.net/?retryWrites=true&w=majority