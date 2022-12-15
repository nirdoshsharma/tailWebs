const jwt = require('jsonwebtoken');
const { CONFIG } = require('../../config');
const authentication = (req, res, next) => {
    const userToken = req.get("x-api-key");
    if(!userToken){
        return res.status(401).send({ error: 1, message: "`x-api-key` missing" })
    }
    try {
        const { email } = jwt.verify(userToken, CONFIG.JWT_TOKEN);
        req.user = { email }
        return next();
    } catch (error) {
        return res.status(401).send({ error: 1, message: "Unauthorised" })
    }
}

module.exports = { authentication }