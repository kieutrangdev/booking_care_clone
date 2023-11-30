import express from "express"
import bodyParser from "body-parser"
import configViewEngine from "./config/configViewEngine.js"
import initWebRoutes from "./route/web.js"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
dotenv.config();
let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


configViewEngine(app)
initWebRoutes(app)

connectDB()

let port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`backend port`, + port)
})