const db = require("../models/index")
let handleUserLogin = (email,password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userdata = {}
            let isExist = await checkUserEmail(email)
            if(isExist) {
                

                resolve()
            }
            else {
                userdata.errCode = 1;
                userdata.errMessage = `Your's Email isn't exist in your sysyem`
                resolve(userdata)
            }
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