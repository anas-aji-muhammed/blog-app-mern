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
app.use(cors({credentials: true, origin: "https://blog-app-mern-ihzym7pme-anas-aji-muhammed.vercel.app"}))
// app.use(cors({credentials: true, origin: "http://localhost:3000"}))
app.use(express.json())

app.get('/', (req, res)=>{
  res.send("Hii we are live");
})
app.use('/', authRoute);
app.use('/', blogsRouteRoute);

//Connect to the database before listening
mongoDBConnection().then(() => {
  app.listen(process.env.PORT || port, () => {
    console.log(`Blog app listening on port ${port}`)
  })
})






