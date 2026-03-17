const mongoose = require('mongoose')
const connectionString = process.env.CONNECTIONDB

mongoose.connect(connectionString).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Database Connection failed");
    console.log(err)
})