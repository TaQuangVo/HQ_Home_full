const express = require("express")
const apiRoutes = require("./routes/index")
const userModel = require("./database/models/userModel")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/api", apiRoutes)

app.get("/",(req,res) => {
    res.send("Hello World!")
})



const port = 5000
app.listen(port, ()=> {
    console.log("App listen on port " + port)
})