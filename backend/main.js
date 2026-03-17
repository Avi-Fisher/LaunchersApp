import express from "express"
import cors from "cors"
import apiLaunchers from "./route/apiLaunchers.js"
import auth from "./route/auth.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/launchers",apiLaunchers)
app.use("/api/auth",auth)




app.listen(3000,()=>{
    console.log("server running http://127.0.0.1:3000");
})


