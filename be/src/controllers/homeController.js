import db from "../models/index"
import CRUDSerivces from "../services/CRUDServices"
let getHomePage = async(req, res) => {

    try {
      let data = await db.User.findAll()
      return res.render('homepage.ejs', {
        data: JSON.stringify(data)
      })
    

    } catch (error) {
        console.log(error)
    }
}

let getAbout = (req, res) => {
    return res.render("test/about.ejs")
}

let create = (req, res) => {
  console.log(req.body)
  return res.render("crud.ejs")
}

let createPost = async(req, res) => {
 let message = await CRUDSerivces.createNewUser(req.body)
 console.log(message)
  return res.send("post crud")
}

export default {
    getHomePage: getHomePage,
    getAbout: getAbout,
    create: create,
    createPost: createPost
};