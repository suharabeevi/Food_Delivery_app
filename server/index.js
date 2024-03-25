require('dotenv').config();
const express =require('express')
const app= express();
const morgan = require('morgan')
const cors= require('cors')
const connection= require('./connection')
const usersRouter = require('./routes/user');

//DB Connection
connection()
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//routes
app.use('/api/user',usersRouter)

const Port =process.env.PORT || 7000
app.listen(Port,()=>{
    console.log(`Server Listening on ${Port}...`);
})