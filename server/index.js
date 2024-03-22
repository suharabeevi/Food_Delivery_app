require('dotenv').config();
const express =require('express')
const app= express();
const morgan = require('morgan')
const cors= require('cors')
const connection= require('./connection')

connection()
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

const Port =process.env.PORT || 7000
app.listen(Port,()=>{
    console.log(`Server Listening on ${Port}...`);
})