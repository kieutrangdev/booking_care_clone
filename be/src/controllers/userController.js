import userServices from "../services/userServices"
import bcrypt from "bcryptjs"
let handleLogin = async(req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if(!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter!'
        })
    }
    let userdata = await userServices.handleUserLogin(email,password)
    return res.status(200).json({
       errCode: userdata.errCode,
       message: userdata.errMessage,
       userdata
    })
}

module.exports = {
    handleLogin: handleLogin
}