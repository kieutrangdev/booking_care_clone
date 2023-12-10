import bcrypt from "bcryptjs"
import db from "../models/index"
const salt = bcrypt.genSaltSync(10)
let createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPaswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPaswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phone,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId

            })
            resolve("Tạo người dùng thành công")
        } catch (error) {
            
        }
    })
   
}

let hashUserPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            var hash = bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (error) {
            reject(error)
        }

    })
}
module.exports = {
    createNewUser: createNewUser
}