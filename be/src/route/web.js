import express from "express"
import homeController from "../controllers/homeController.js"
import userController from "../controllers/userController.js"

let router = express.Router()

let initWebRouter = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/about", homeController.getAbout)

    router.post("/api/login", userController.handleLogin)
    return app.use("/", router)
}

export default initWebRouter