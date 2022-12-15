const { UserDAO } = require("../../dao/user.dao");
const jwt = require('jsonwebtoken');
const { CONFIG } = require("../../config");

const login = async (req, res) => {
    const { body: { email, password } = {} } = req

    try {
        const user = await UserDAO.login(email, password);
        const token = jwt.sign({ email: user.email }, CONFIG.JWT_TOKEN);
        return res.send({
            error: 0,
            data: {
                token
            }
        })        
    } catch (error) {
        return res.status(400).send({
            error: 1,
            message: error.message
        })   
    }
}

const UserController = { login };
module.exports = { UserController }