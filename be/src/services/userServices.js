const db = require("../models/index")
const bcryptjs = require("bcryptjs")
let handleUserLogin = (email,password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userdata = {}
            let isExist = await checkUserEmail(email)
            if(isExist) {
                
                let user = await db.User.findOne({
                    where: {email: email}
                })
                if(user) {
                    let check = await bcryptjs.compareSync(password, user.password)
                    if(check) {
                        userdata.errCode = 0
                        userdata.errMessage = 'ok'
                        userdata.user = user
                    }
                    else {
                        userdata.errCode = 3
                        userdata.errMessage = 'wrong password'
                    }
                }
                else {
                    userdata.errCode = 2;
                    userdata.errMessage = `User's not found`
                }
               
            }
            else {
                userdata.errCode = 1;
                userdata.errMessage = `Your's Email isn't exist in your sysyem`
               
            }
            resolve(userdata)
        } catch (error) {
            reject(error)
        }
    })
}

let compareUserPassword = () =>{
    return new Promise((resolve, reject) => {
        try {
            
        } catch (error) {
         reject(error)   
        }
    })
}

let checkUserEmail = (useremail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: useremail}
            })
            if(user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    checkUserEmail,
    handleUserLogin
}