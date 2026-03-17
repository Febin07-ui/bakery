require('dotenv').config()
const express = require("express")
const cors = require('cors')
require('./config/db')

const server = express()
server.use(cors())
server.use(express.json())

const router = require('./routes/routing')
server.use(router)


PORT = 3000

server.listen(PORT,()=>{
    console.log("Server Started");
})
