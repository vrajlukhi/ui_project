const express = require("express")
const connect = require("./config/product.db")
const routers = require("./routes/product.routes")
const app = express()
app.set("view engine", "ejs")
app.set("viwes", __dirname + "/views")
app.use(express.json())
app.use(routers)



app.listen(8090 , ()=>{
    console.log("port start is 8090")
    connect()
})