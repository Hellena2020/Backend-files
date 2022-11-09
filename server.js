const express =require("express")
const mongoose = require("mongoose")

// mongoes help us to connect node js to mongo db

const app =express()
const router= require("./router")

const url ='mongodb+srv://Hellena:hellena@codequeen7.ikik6e1.mongodb.net/test' 

const port = 9000;
// app.get('/',(req, res) => {
//     res.status(200).send({
//         "message":"welcome to server"
//     });
// })

app.use('/', router)
mongoose.connect(url).then (() => {
    app.listen(port, () => {
        console.log(`server is running ${port}`)
    })     
}).catch(error=>console.log(error))
