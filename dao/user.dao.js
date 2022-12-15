const { UserModel } = require("./models/user.model");

const login = async (email, password) => {
    const user = await UserModel.findOne({email, password});
    if(!user) throw new Error("User Not Found")
    return user
}
const UserDAO = { login }
module.exports = { UserDAO }