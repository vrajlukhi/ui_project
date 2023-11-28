const {Router} = require("express")
const proModel = require("../modals/product.modal")
const routers = Router()

routers.get("/ui" , (req , res) =>{
    res.render("ui")
})
routers.get("/data" , async(req , res)=>{
    let data = await proModel.find()
    res.json(data)
})

routers.post("/create" , async(req , res) =>{
    let data = await proModel.create(req.body)
    res.json(data)
})
routers.delete("/delete/:id", async(req , res)=>{
    let {id} = req.params
    let data = await proModel.findByIdAndDelete(id)
    res.send(data)
})

module.exports = routers